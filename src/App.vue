<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue'
import scheduleData from '../schedule.json'
import analysisData from '../match_analysis.json'

interface Match {
  match_id: number;
  group?: string;
  stage?: string;
  home_team: string;
  away_team: string;
  date: string;
  venue: string;
  time_local?: string;
}

interface Analysis {
  highlights: string[];
  betting_tips: {
    moneyline: string;
    handicap: string;
    over_under: string;
    correct_score: string;
  };
}

// 資料已預先排序，直接使用
const matches = ref<Match[]>(scheduleData.matches)
const analysis = ref<Record<string, Analysis>>(analysisData as any)

// 預設選取最近的下一場賽事（台北時間 UTC+8）
const now = new Date()
const nextMatch = matches.value.find(m => {
  const matchDate = new Date(m.date + 'T' + (m.time_local || '00:00') + '+08:00')
  return matchDate >= now
}) || matches.value[matches.value.length - 1]

const selectedMatchId = ref<number>(nextMatch.match_id)

const selectedMatch = computed(() =>
  matches.value.find(m => m.match_id === selectedMatchId.value)
)

const selectedAnalysis = computed(() =>
  analysis.value[selectedMatchId.value.toString()]
)

const matchListRef = ref<HTMLElement | null>(null)
const sidebarCollapsed = ref(false)

const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value
}

const selectMatch = (id: number) => {
  selectedMatchId.value = id
  nextTick(() => {
    const el = document.getElementById('match-' + id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  })
}

// 頁面載入時自動捲動到預設的比賽
onMounted(() => {
  nextTick(() => {
    const el = document.getElementById('match-' + selectedMatchId.value)
    el?.scrollIntoView({ behavior: 'instant', block: 'center' })
  })
})
</script>

<template>
  <div class="container">
    <!-- Sidebar -->
    <div :class="['sidebar', { collapsed: sidebarCollapsed }]">
      <div class="sidebar-header">
        <div class="header-top">
          <div v-if="!sidebarCollapsed">
            <h1>FIFA 2026</h1>
            <p>觀賽與運彩指南</p>
          </div>
          <button class="toggle-btn" @click="toggleSidebar" :title="sidebarCollapsed ? '展開' : '收合'">
            {{ sidebarCollapsed ? '▶' : '◀' }}
          </button>
        </div>
      </div>
      <div class="match-list" ref="matchListRef" v-show="!sidebarCollapsed">
        <div 
          v-for="match in matches" 
          :key="match.match_id"
          :id="'match-' + match.match_id"
          :class="['match-tab', { active: selectedMatchId === match.match_id }]"
          @click="selectMatch(match.match_id)"
        >
          <div class="match-info-mini">
            <span class="group-tag">{{ match.group ? 'Group ' + match.group : match.stage }}</span>
            <span class="match-date">{{ match.date }}</span>
          </div>
          <div class="match-teams-mini">
            {{ match.home_team }} vs {{ match.away_team }}
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <div v-if="selectedMatch" class="detail-card">
        <header class="detail-header">
          <div class="stage-info">{{ selectedMatch.stage || '小組賽 Group ' + selectedMatch.group }}</div>
          <div class="vs-display">
            <span class="team-name">{{ selectedMatch.home_team }}</span>
            <span class="vs">VS</span>
            <span class="team-name">{{ selectedMatch.away_team }}</span>
          </div>
          <div class="venue-info">
            📍 {{ selectedMatch.venue }} | 📅 {{ selectedMatch.date }} {{ selectedMatch.time_local || '' }}
          </div>
        </header>

        <section class="analysis-section" v-if="selectedAnalysis">
          <h2>⚡ 觀戰重點</h2>
          <ul class="highlights">
            <li v-for="(point, index) in selectedAnalysis.highlights" :key="index">
              {{ point }}
            </li>
          </ul>

          <h2 class="bet-title">💰 台灣運彩推薦玩法</h2>
          <div class="bet-grid">
            <div class="bet-item">
              <label>不讓分 (獨贏)</label>
              <p>{{ selectedAnalysis.betting_tips.moneyline }}</p>
            </div>
            <div class="bet-item">
              <label>讓分</label>
              <p>{{ selectedAnalysis.betting_tips.handicap }}</p>
            </div>
            <div class="bet-item">
              <label>大小球</label>
              <p>{{ selectedAnalysis.betting_tips.over_under }}</p>
            </div>
            <div class="bet-item">
              <label>正確比數</label>
              <p class="score">{{ selectedAnalysis.betting_tips.correct_score }}</p>
            </div>
          </div>
        </section>

        <section v-else class="no-analysis">
          <p>此賽事尚無 AI 分析內容 (TBD)</p>
        </section>
      </div>
    </div>
  </div>
</template>

<style>
:root {
  --primary: #004d98;
  --accent: #d81e05;
  --bg: #f4f7f6;
  --text: #333;
}

body {
  margin: 0;
  font-family: "PingFang TC", "Microsoft JhengHei", sans-serif;
  background-color: var(--bg);
  color: var(--text);
}

.container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

/* Sidebar Styles */
.sidebar {
  width: 320px;
  background: white;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  flex-shrink: 0;
}

.sidebar.collapsed {
  width: 52px;
}

.header-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
}

.toggle-btn {
  background: rgba(255,255,255,0.2);
  border: none;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 6px;
  flex-shrink: 0;
  transition: background 0.2s;
  margin-left: auto;
}

.toggle-btn:hover {
  background: rgba(255,255,255,0.35);
}

.sidebar-header {
  padding: 20px;
  background: var(--primary);
  color: white;
}

.sidebar-header h1 { margin: 0; font-size: 1.5rem; }
.sidebar-header p { margin: 5px 0 0; opacity: 0.8; font-size: 0.9rem; }

.match-list {
  flex: 1;
  overflow-y: auto;
}

.match-tab {
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  transition: all 0.2s;
}

.match-tab:hover { background: #f9f9f9; }
.match-tab.active {
  background: #eef4ff;
  border-left: 4px solid var(--primary);
}

.match-info-mini {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  margin-bottom: 5px;
  color: #666;
}

.group-tag { font-weight: bold; color: var(--primary); }

.match-teams-mini {
  font-weight: 500;
  font-size: 0.95rem;
}

/* Main Content Styles */
.main-content {
  flex: 1;
  padding: 40px;
  overflow-y: auto;
  display: flex;
  justify-content: center;
}

.detail-card {
  width: 100%;
  max-width: 800px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  padding: 30px;
  height: fit-content;
}

.detail-header {
  text-align: center;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 25px;
  margin-bottom: 25px;
}

.stage-info {
  text-transform: uppercase;
  color: var(--accent);
  font-weight: bold;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.vs-display {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 15px 0;
}

.team-name {
  font-size: 1.8rem;
  font-weight: 800;
}

.vs {
  font-style: italic;
  color: #999;
  font-size: 1.2rem;
}

.venue-info {
  color: #666;
  font-size: 0.9rem;
}

.analysis-section h2 {
  font-size: 1.2rem;
  border-left: 4px solid var(--primary);
  padding-left: 10px;
  margin-top: 30px;
}

.highlights {
  padding-left: 20px;
  line-height: 1.6;
}

.highlights li { margin-bottom: 10px; }

.bet-title { margin-top: 40px !important; }

.bet-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 15px;
}

.bet-item {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #eee;
}

.bet-item label {
  display: block;
  font-weight: bold;
  font-size: 0.85rem;
  color: var(--primary);
  margin-bottom: 8px;
}

.bet-item p { margin: 0; font-size: 0.95rem; line-height: 1.4; }

.score {
  font-size: 1.4rem !important;
  font-weight: bold;
  color: var(--accent);
}

.no-analysis {
  text-align: center;
  padding: 50px;
  color: #999;
}
</style>
