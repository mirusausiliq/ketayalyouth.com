# Ketayalyouth Decap + Chakra 起始內容包

此套件包含兩份**由 v0.4 長文草稿轉換的** JSON（尚未視為正式發布文案），對應 Decap 固定頁面的 `config.yml`、TypeScript Zod schema 與 coding agent prompt。它**不是已經整合完成或部署成功的 repo**。

## 路徑
- `content/pages/home.json`、`about.json`：根目錄 JSON，長文保留在 `body` 欄位。
- `apps/web/public/admin/index.html`、`config.yml`：Decap 靜態後台。記得替換 GitHub repository。
- `packages/schemas/src/pages.ts`：Zod schema 範例，請依現有 workspace 設定 export/package.json。
- `AGENT_PROMPT.md`：給 coding agent 的交付規格。

## 部署與編輯
- `pnpm --filter web add @chakra-ui/react @emotion/react`（依實際 workspace package name 修改）；Chakra UI v3 配合 Provider。
- 本機使用 Decap local backend；另開 `pnpm exec decap-server`（先安裝 decap-server）。
- GitHub Pages 不包含 Decap GitHub OAuth，正式登入需 OAuth proxy 或可用的代管認證服務。
- 純 Vite React SPA 並不自動產生各頁 HTML；SEO 的 SSG / prerender 需另外落實。
- `config.yml` 中使用 text widget 管理含空白行的多段長文；若未來改 Markdown widget，前端渲染策略需要同步調整。
- `hero.titleTayal`、values 與 teams 的泰雅語欄位尚待人工校訂。

## 驗證
解壓至 repo 根目錄合併檔案後，先在本機檢查 CMS 是否能載入、欄位修改是否正確寫回 JSON，然後執行現有的 typecheck/build。不要把此套件當成已經完整運作的網站。
