document.addEventListener('DOMContentLoaded', function() {
    // 表單驗證
    const form = document.getElementById('payment-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const planSelect = document.getElementById('plan');

    // 價格對應表
    const planPrices = {
        'basic': 15000,
        'pro': 30000,
        'enterprise': 50000
    };

    // 綠界金流API設定
    const ecpayConfig = {
        // 測試環境API網址
        apiUrl: 'https://payment-stage.ecpay.com.tw/Cashier/AioCheckOut/V5',
        // 商店資訊
        MerchantID: '3007299',
        HashKey: 'CHuFet2Q2ngY8voz',
        HashIV: '7gl5uy3mxIEOYp6g'
    };

    // 表單提交處理
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // 基本驗證
        if (!validateForm()) {
            return;
        }

        // 準備訂單資料
        const orderData = {
            MerchantTradeNo: generateOrderNumber(),
            MerchantTradeDate: formatDate(new Date()),
            TotalAmount: planPrices[planSelect.value],
            TradeDesc: `SEO服務-${planSelect.options[planSelect.selectedIndex].text}`,
            ItemName: planSelect.options[planSelect.selectedIndex].text,
            ReturnURL: `${window.location.origin}/return`,
            ClientBackURL: window.location.origin,
            OrderResultURL: `${window.location.origin}/complete`,
            ChoosePayment: 'Credit',
            EncryptType: '1'
        };

        // 建立隱藏表單並提交到綠界
        const ecpayForm = document.createElement('form');
        ecpayForm.method = 'POST';
        ecpayForm.action = ecpayConfig.apiUrl;

        // 加入訂單資料到表單
        for (let key in orderData) {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = orderData[key];
            ecpayForm.appendChild(input);
        }

        // 加入CheckMacValue
        const checkMacValue = generateCheckMacValue(orderData);
        const macValueInput = document.createElement('input');
        macValueInput.type = 'hidden';
        macValueInput.name = 'CheckMacValue';
        macValueInput.value = checkMacValue;
        ecpayForm.appendChild(macValueInput);

        // 提交表單到綠界
        document.body.appendChild(ecpayForm);
        ecpayForm.submit();
    });

    // 表單驗證函數
    function validateForm() {
        let isValid = true;

        // 驗證姓名
        if (!nameInput.value.trim()) {
            showError(nameInput, '請輸入姓名');
            isValid = false;
        }

        // 驗證Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, '請輸入有效的Email地址');
            isValid = false;
        }

        // 驗證電話
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            showError(phoneInput, '請輸入有效的手機號碼');
            isValid = false;
        }

        return isValid;
    }

    // 顯示錯誤訊息
    function showError(input, message) {
        const formGroup = input.parentElement;
        let errorDiv = formGroup.querySelector('.error-message');

        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            formGroup.appendChild(errorDiv);
        }

        errorDiv.textContent = message;
        input.classList.add('error');

        // 3秒後清除錯誤訊息
        setTimeout(() => {
            errorDiv.remove();
            input.classList.remove('error');
        }, 3000);
    }

    // 生成訂單編號
    function generateOrderNumber() {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 1000);
        return `ORDER${timestamp}${random}`;
    }

    // 格式化日期
    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    }

    // 生成檢查碼
    function generateCheckMacValue(orderData) {
        // 按照綠界規範排序並串接參數
        const sortedKeys = Object.keys(orderData).sort();
        let paramString = '';
        
        sortedKeys.forEach(key => {
            paramString += `${key}=${orderData[key]}&`;
        });

        paramString = `HashKey=${ecpayConfig.HashKey}&${paramString}HashIV=${ecpayConfig.HashIV}`;
        
        // URL encode
        paramString = encodeURIComponent(paramString).toLowerCase();
        
        // 轉換特殊字元
        paramString = paramString
            .replace(/%20/g, '+')
            .replace(/%2d/g, '-')
            .replace(/%5f/g, '_')
            .replace(/%2e/g, '.')
            .replace(/%21/g, '!')
            .replace(/%2a/g, '*')
            .replace(/%28/g, '(')
            .replace(/%29/g, ')');

        // SHA256 雜湊
        const hash = CryptoJS.SHA256(paramString);
        return hash.toString().toUpperCase();
    }

    // 綁定方案選擇按鈕事件
    const buyButtons = document.querySelectorAll('.buy-button');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const plan = this.getAttribute('data-plan');
            planSelect.value = plan;
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        });
    });
}));