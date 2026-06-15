# FIFA 2026 世界盃觀賽指南

一個 Vue 3 前端網站，提供 2026 FIFA 世界盃 104 場賽事的賽程、AI 觀戰重點與台灣運彩投注建議。

## 功能

- 📅 完整 104 場賽程（含小組賽、淘汰賽）
- ⚡ 每場賽事 AI 生成觀戰重點（72 場已分析）
- 💰 台灣運彩推薦玩法：不讓分、讓分、大小球、正確比數
- 💬 Disqus 留言板，支援每場賽事獨立討論
- 📱 RWD 響應式設計，手機、桌面皆適用

## 技術棧

- **前端框架：** Vue 3 + TypeScript
- **打包工具：** Vite
- **資料來源：** `schedule.json`（賽程）、`match_analysis.json`（AI 分析）

## 資料結構

### `schedule.json`

```json
{
  "matches": [
    {
      "match_id": 1,
      "group": "A",
      "stage": "小組賽",
      "home_team": "墨西哥",
      "away_team": "南非",
      "date": "2026-06-11",
      "time_local": "20:00",
      "venue": "AT&T Stadium, Arlington"
    }
  ]
}
```

### `match_analysis.json`

```json
{
  "1": {
    "highlights": [
      "觀戰重點 1",
      "觀戰重點 2",
      "觀戰重點 3"
    ],
    "betting_tips": {
      "moneyline": "墨西哥勝",
      "handicap": "墨西哥讓分勝 (-1)",
      "over_under": "大 2.5 球",
      "correct_score": "2:0"
    }
  }
}
```

## AI 分析生成方式

`match_analysis.json` 由 Gemini CLI 批次生成，針對每場賽事送入以下 prompt：

```
以下是一場 FIFA 2026 世界盃比賽：
主隊：{home_team}
客隊：{away_team}
日期：{date}

請用繁體中文產生：
1. highlights：3-5 條觀戰重點（陣容特色、對決焦點、戰術分析等）
2. betting_tips：
   - moneyline：不讓分推薦（例如「XX 勝」或「和局」）
   - handicap：讓分建議（含讓分數）
   - over_under：大小球建議（例如「大 2.5 球」）
   - correct_score：正確比數預測

回傳 JSON 格式：
{
  "highlights": [...],
  "betting_tips": {
    "moneyline": "...",
    "handicap": "...",
    "over_under": "...",
    "correct_score": "..."
  }
}
```

使用 Gemini CLI 批次跑完 72 場賽事並寫入 `match_analysis.json`。

## 本地開發

```bash
npm install
npm run dev
```

## 建置部署

```bash
npm run build
# dist/ 即可靜態部署
```

## 授權

MIT
