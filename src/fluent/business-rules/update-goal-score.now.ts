import '@servicenow/sdk/global'
import { BusinessRule } from '@servicenow/sdk/core'
import { updateGoalScoreOnActionChange } from '../../server/scoring-functions.js'

// Business rule to update goal execution score when weekly actions are completed
BusinessRule({
    $id: Now.ID['br_update_goal_score'],
    name: 'Update Goal Execution Score',
    table: 'x_942105_12_week_y_weekly_action',
    action: ['insert', 'update'],
    when: 'after',
    script: updateGoalScoreOnActionChange,
    active: true,
    order: 100
})