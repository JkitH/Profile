// 表單驗證
const contactForm = document.getElementById('contact-form');
const formGroups = document.querySelectorAll('.form-group');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // 驗證每個必填欄位
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        if (!input.value.trim()) {
            showError(group, '此欄位為必填');
            isValid = false;
        } else {
            clearError(group);
        }
    });

    // 驗證Email格式
    const emailInput = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        showError(emailInput.parentElement, '請輸入有效的Email地址');
        isValid = false;
    }

    // 驗證電話格式
    const phoneInput = document.getElementById('phone');
    const phoneRegex = /^[0-9]{8,10}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        showError(phoneInput.parentElement, '請輸入有效的電話號碼');
        isValid = false;
    }

    if (isValid) {
        // 表單驗證通過，可以提交
        alert('表單已送出，我們會盡快與您聯繫！');
        contactForm.reset();
    }
});

// 顯示錯誤訊息
function showError(formGroup, message) {
    formGroup.classList.add('error');
    const errorMessage = formGroup.querySelector('.error-message') || 
                        createErrorMessage(formGroup);
    errorMessage.textContent = message;
}

// 清除錯誤訊息
function clearError(formGroup) {
    formGroup.classList.remove('error');
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.textContent = '';
    }
}

// 創建錯誤訊息元素
function createErrorMessage(formGroup) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    formGroup.appendChild(errorDiv);
    return errorDiv;
}

// 綠界金流整合
const paymentButtons = document.querySelectorAll('.payment-button');

paymentButtons.forEach(button => {
    button.addEventListener('click', () => {
        const plan = button.dataset.plan;
        let amount;

        switch(plan) {
            case 'basic':
                amount = 10000;
                break;
            case 'pro':
                amount = 30000;
                break;
            case 'enterprise':
                amount = 50000;
                break;
            default:
                amount = 0;
        }

        if (amount > 0) {
            // 建立訂單並導向綠界金流付款頁面
            // 實際整合時需要替換為真實的商店資訊
            const orderData = {
                MerchantTradeNo: generateOrderNumber(),
                MerchantTradeDate: formatDate(new Date()),
                TotalAmount: amount,
                TradeDesc: `SEO服務 - ${plan}方案`,
                ItemName: `SEO服務${plan}方案 x1`,
                ReturnURL: 'http://localhost:3001/return',
                OrderResultURL: 'http://localhost:3001/complete'
            };

            // 模擬導向付款頁面
            alert(`即將導向付款頁面，訂單金額：NT$ ${amount}`);
        }
    });
});

// 生成訂單編號
function generateOrderNumber() {
    const timestamp = Date.now().toString();
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `SEO${timestamp}${random}`;
}

// 格式化日期
function formatDate(date) {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}