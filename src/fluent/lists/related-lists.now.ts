import '@servicenow/sdk/global'
import { List } from '@servicenow/sdk/core'
import { goal_view, action_view, daily_tactic_view } from './ui-views.now.js'

// Related list: Goals on 12 Week Cycle records
export const goals_related_list = List({
    table: 'x_942105_12_week_y_goal',
    view: goal_view,
    parent: 'x_942105_12_week_y_twelve_week_cycle',
    columns: [
        { element: 'title', position: 0 },
        { element: 'priority', position: 1 },
        { element: 'current_score', position: 2 },
        { element: 'target_score', position: 3 },
        { element: 'active', position: 4 },
        { element: 'owner', position: 5 },
    ],
})

// Related list: Weekly Actions on Goal records  
export const weekly_actions_on_goals_related_list = List({
    table: 'x_942105_12_week_y_weekly_action',
    view: action_view,
    parent: 'x_942105_12_week_y_goal',
    columns: [
        { element: 'action', position: 0 },
        { element: 'week_number', position: 1 },
        { element: 'priority', position: 2 },
        { element: 'completed', position: 3 },
        { element: 'planned_completion_date', position: 4 },
        { element: 'actual_completion_date', position: 5 },
        { element: 'owner', position: 6 },
    ],
})

// Related list: All Weekly Actions on 12 Week Cycle records (via goal relationship)
export const all_weekly_actions_related_list = List({
    table: 'x_942105_12_week_y_weekly_action',
    view: action_view,
    parent: 'x_942105_12_week_y_twelve_week_cycle',
    columns: [
        { element: 'action', position: 0 },
        { element: 'goal', position: 1 },
        { element: 'week_number', position: 2 },
        { element: 'priority', position: 3 },
        { element: 'completed', position: 4 },
        { element: 'planned_completion_date', position: 5 },
        { element: 'owner', position: 6 },
    ],
})

// NEW: Related list: Daily Tactics on Weekly Action records
export const daily_tactics_on_weekly_actions_related_list = List({
    table: 'x_942105_12_week_y_daily_tactic',
    view: daily_tactic_view,
    parent: 'x_942105_12_week_y_weekly_action',
    columns: [
        { element: 'task', position: 0 },
        { element: 'day_of_week', position: 1 },
        { element: 'planned_date', position: 2 },
        { element: 'priority', position: 3 },
        { element: 'completed', position: 4 },
        { element: 'actual_completion_date', position: 5 },
        { element: 'time_estimate', position: 6 },
        { element: 'owner', position: 7 },
    ],
})