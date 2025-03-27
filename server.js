const express = require('express');
const path = require('path');
const app = express();

// 設定靜態文件目錄
app.use(express.static(__dirname));

// 設定路由
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 設定回調路由
app.post('/return', (req, res) => {
    // 處理綠界金流回調
    res.send('Payment return received');
});

app.get('/complete', (req, res) => {
    // 處理訂單完成
    res.send('Order completed');
});

// 啟動伺服器
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});