# GitHub Repository Explorer (Infinite Scroll)

這是一個基於 **Vue 3** 與 **TypeScript** 開發的 GitHub Repo 列表，核心功能為「無限滾動（Infinite Scroll）」。使用者可以流暢地瀏覽大量 GitHub Repo 資訊，並享受極致的加載體驗。

---

## 技術棧 (Tech Stack)

採用現代前端開發主流工具，確保程式碼品質與開發效率：

- **框架**: [Vue 3](https://vuejs.org/)
- **建構工具**: [Vite](https://vitejs.dev/)
- **UI 框架**: [Element Plus](https://element-plus.org/)
- **型別規範**: [TypeScript](https://www.typescriptlang.org/)
- **程式碼規範**:
  - **ESLint**
  - **Prettier**
- **版本控制**: **Git**

---

## 實作重點與技術亮點

### 1. 高效能無限滾動 (Infinite Scroll)

採用 **Intersection Observer API**。

- **效能優勢**: 瀏覽器原生支援，避免在滾動時頻繁觸發計算。
- **流暢體驗**: 設置 `rootMargin` 緩衝區，在使用者抵達底部前即預先觸發加載，提升使用者體驗。

### 2. 響應式佈局與 UX 優化

- **RWD 設計**: 利用 Element Plus 的 Grid 系統，確保在行動端、平板與桌面端皆有良好的閱讀排版。

* **加載視覺**: 實作 **Skeleton (骨架屏)** 效果，讓使用者在等待 API 回應時仍有良好的視覺預期，避免畫面閃爍。
* **狀態防抖**: 嚴謹處理 `loading` 狀態，防止在快速滾動或網路延遲時重複發送相同的 API 請求。

## 專案安裝與執行

### 1. 複製專案

```bash
git clone <your-repository-url>
cd github-repo-scroller
```

### 2. 安裝依賴

```bash
npm install
```

### 3. 啟動開發伺服器

```bash
npm run dev
```

### 4. 構建生產環境

```bash
npm run build

```

## 環境變數配置

- 由於 GitHub API 對於未驗證請求有頻率限制（60次/小時），本專案建議配置 GitHub Token 以獲得更穩定的測試體驗：

1. 將 .env.example 重新命名為 .env。
2. 將您的 GitHub Token 填入 VITE_GITHUB_TOKEN。
3. 重啟開發伺服器。
