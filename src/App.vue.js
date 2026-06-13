/// <reference types="../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref, computed } from 'vue';
import scheduleData from '../schedule.json';
import analysisData from '../match_analysis.json';
const matches = ref(scheduleData.matches);
const analysis = ref(analysisData);
const selectedMatchId = ref(matches.value[0].match_id);
const selectedMatch = computed(() => matches.value.find(m => m.match_id === selectedMatchId.value));
const selectedAnalysis = computed(() => analysis.value[selectedMatchId.value.toString()]);
const selectMatch = (id) => {
    selectedMatchId.value = id;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "sidebar" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "sidebar-header" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "match-list" },
});
for (const [match] of __VLS_getVForSourceType((__VLS_ctx.matches))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.selectMatch(match.match_id);
            } },
        key: (match.match_id),
        ...{ class: (['match-tab', { active: __VLS_ctx.selectedMatchId === match.match_id }]) },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "match-info-mini" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "group-tag" },
    });
    (match.group ? 'Group ' + match.group : match.stage);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "match-date" },
    });
    (match.date);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "match-teams-mini" },
    });
    (match.home_team);
    (match.away_team);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "main-content" },
});
if (__VLS_ctx.selectedMatch) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "detail-card" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({
        ...{ class: "detail-header" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "stage-info" },
    });
    (__VLS_ctx.selectedMatch.stage || '小組賽 Group ' + __VLS_ctx.selectedMatch.group);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "vs-display" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "team-name" },
    });
    (__VLS_ctx.selectedMatch.home_team);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "vs" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "team-name" },
    });
    (__VLS_ctx.selectedMatch.away_team);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "venue-info" },
    });
    (__VLS_ctx.selectedMatch.venue);
    (__VLS_ctx.selectedMatch.date);
    (__VLS_ctx.selectedMatch.time_local || '');
    if (__VLS_ctx.selectedAnalysis) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
            ...{ class: "analysis-section" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
            ...{ class: "highlights" },
        });
        for (const [point, index] of __VLS_getVForSourceType((__VLS_ctx.selectedAnalysis.highlights))) {
            __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
                key: (index),
            });
            (point);
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
            ...{ class: "bet-title" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "bet-grid" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "bet-item" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.selectedAnalysis.betting_tips.moneyline);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "bet-item" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.selectedAnalysis.betting_tips.handicap);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "bet-item" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.selectedAnalysis.betting_tips.over_under);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "bet-item" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "score" },
        });
        (__VLS_ctx.selectedAnalysis.betting_tips.correct_score);
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
            ...{ class: "no-analysis" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
}
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar']} */ ;
/** @type {__VLS_StyleScopedClasses['sidebar-header']} */ ;
/** @type {__VLS_StyleScopedClasses['match-list']} */ ;
/** @type {__VLS_StyleScopedClasses['match-info-mini']} */ ;
/** @type {__VLS_StyleScopedClasses['group-tag']} */ ;
/** @type {__VLS_StyleScopedClasses['match-date']} */ ;
/** @type {__VLS_StyleScopedClasses['match-teams-mini']} */ ;
/** @type {__VLS_StyleScopedClasses['main-content']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-card']} */ ;
/** @type {__VLS_StyleScopedClasses['detail-header']} */ ;
/** @type {__VLS_StyleScopedClasses['stage-info']} */ ;
/** @type {__VLS_StyleScopedClasses['vs-display']} */ ;
/** @type {__VLS_StyleScopedClasses['team-name']} */ ;
/** @type {__VLS_StyleScopedClasses['vs']} */ ;
/** @type {__VLS_StyleScopedClasses['team-name']} */ ;
/** @type {__VLS_StyleScopedClasses['venue-info']} */ ;
/** @type {__VLS_StyleScopedClasses['analysis-section']} */ ;
/** @type {__VLS_StyleScopedClasses['highlights']} */ ;
/** @type {__VLS_StyleScopedClasses['bet-title']} */ ;
/** @type {__VLS_StyleScopedClasses['bet-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['bet-item']} */ ;
/** @type {__VLS_StyleScopedClasses['bet-item']} */ ;
/** @type {__VLS_StyleScopedClasses['bet-item']} */ ;
/** @type {__VLS_StyleScopedClasses['bet-item']} */ ;
/** @type {__VLS_StyleScopedClasses['score']} */ ;
/** @type {__VLS_StyleScopedClasses['no-analysis']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            matches: matches,
            selectedMatchId: selectedMatchId,
            selectedMatch: selectedMatch,
            selectedAnalysis: selectedAnalysis,
            selectMatch: selectMatch,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
