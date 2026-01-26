import '@servicenow/sdk/global'
import { List } from '@servicenow/sdk/core'
import { twelve_week_view, goal_view, action_view, daily_tactic_view } from './ui-views.now.js'

// Main list for Daily Tactics
export const daily_tactic_list = List({
    table: 'x_942105_12_week_y_daily_tactic',
    view: daily_tactic_view,
    columns: [
        { element: 'task', position: 0 },
        { element: 'weekly_action', position: 1 },
        { element: 'day_of_week', position: 2 },
        { element: 'planned_date', position: 3 },
        { element: 'priority', position: 4 },
        { element: 'completed', position: 5 },
        { element: 'owner', position: 6 },
    ],
})

// List for 12 Week Cycles
export const twelve_week_cycle_list = List({
    table: 'x_942105_12_week_y_twelve_week_cycle',
    view: twelve_week_view,
    columns: [
        { element: 'name', position: 0 },
        { element: 'start_date', position: 1 },
        { element: 'end_date', position: 2 },
        { element: 'execution_score', position: 3 },
        { element: 'active', position: 4 },
        { element: 'owner', position: 5 },
    ],
})

// List for Goals
export const goal_list = List({
    table: 'x_942105_12_week_y_goal',
    view: goal_view,
    columns: [
        { element: 'title', position: 0 },
        { element: 'twelve_week_cycle', position: 1 },
        { element: 'priority', position: 2 },
        { element: 'current_score', position: 3 },
        { element: 'target_score', position: 4 },
        { element: 'active', position: 5 },
        { element: 'owner', position: 6 },
    ],
})

// List for Weekly Actions
export const weekly_action_list = List({
    table: 'x_942105_12_week_y_weekly_action',
    view: action_view,
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