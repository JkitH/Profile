# SEO服務網站

這是一個專業的SEO服務介紹網站，提供完整的搜尋引擎最佳化解決方案，並整合綠界金流支付系統。

## 功能特色

- 響應式設計，支援各種裝置瀏覽
- SEO友好的HTML結構和meta標籤
- 清晰的服務方案介紹
- 整合綠界金流API的安全支付系統
- 表單驗證功能

## 技術架構

- HTML5
- CSS3 (含響應式設計)
- JavaScript (原生JS)
- 綠界金流API整合

## 檔案結構

- `index.html`: 主要的HTML結構
- `styles.css`: 主要樣式表
- `error.css`: 表單錯誤提示樣式
- `script.js`: JavaScript功能實現

## 使用說明

1. 將專案檔案放置於網頁伺服器
2. 更新綠界金流API設定（位於script.js）：
   - MerchantID
   - HashKey
   - HashIV
3. 設定正確的ReturnURL和OrderResultURL

## 注意事項

- 請確保已申請綠界金流商店帳號
- 測試環境與正式環境的API網址不同，上線時需要更改
- 請妥善保管金流API的相關金鑰