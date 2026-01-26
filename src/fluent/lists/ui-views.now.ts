import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Define UI view for lists
export const twelve_week_view = Record({
    $id: Now.ID['twelve_week_view'],
    table: 'sys_ui_view',
    data: {
        name: 'twelve_week_default',
        title: '12 Week Year Default View'
    }
})

export const goal_view = Record({
    $id: Now.ID['goal_view'],
    table: 'sys_ui_view',
    data: {
        name: 'goal_default',
        title: 'Goal Default View'
    }
})

export const action_view = Record({
    $id: Now.ID['action_view'],
    table: 'sys_ui_view',
    data: {
        name: 'action_default',
        title: 'Weekly Action Default View'
    }
})

export const daily_tactic_view = Record({
    $id: Now.ID['daily_tactic_view'],
    table: 'sys_ui_view',
    data: {
        name: 'daily_tactic_default',
        title: 'Daily Tactic Default View'
    }
})