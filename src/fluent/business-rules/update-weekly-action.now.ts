import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { updateWeeklyActionFromDailyTactics } from '../../server/scoring-functions.js'

// Business rule to update weekly action completion when daily tactics change
BusinessRule({
    $id: Now.ID['br_update_weekly_action'],
    name: 'Update Weekly Action from Daily Tactics',
    table: 'x_942105_12_week_y_daily_tactic',
    action: ['insert', 'update'],
    when: 'after',
    script: updateWeeklyActionFromDailyTactics,
    active: true,
    order: 100
})