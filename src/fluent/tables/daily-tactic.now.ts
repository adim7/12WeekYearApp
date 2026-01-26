import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, BooleanColumn, DateColumn, IntegerColumn } from '@servicenow/sdk/core'

// Creates the Daily Tactics table to track daily tasks that comprise weekly actions
export const x_942105_12_week_y_daily_tactic = Table({
    name: 'x_942105_12_week_y_daily_tactic',
    label: 'Daily Tactic',
    schema: {
        task: StringColumn({ 
            label: 'Daily Task', 
            maxLength: 500,
            mandatory: true 
        }),
        weekly_action: ReferenceColumn({ 
            label: 'Weekly Action',
            referenceTable: 'x_942105_12_week_y_weekly_action',
            mandatory: true 
        }),
        planned_date: DateColumn({ 
            label: 'Planned Date',
            mandatory: true
        }),
        day_of_week: StringColumn({
            label: 'Day of Week',
            choices: {
                monday: { label: 'Monday', sequence: 1 },
                tuesday: { label: 'Tuesday', sequence: 2 },
                wednesday: { label: 'Wednesday', sequence: 3 },
                thursday: { label: 'Thursday', sequence: 4 },
                friday: { label: 'Friday', sequence: 5 },
            },
            dropdown: 'dropdown_with_none',
            mandatory: true
        }),
        completed: BooleanColumn({ 
            label: 'Completed',
            default: false 
        }),
        actual_completion_date: DateColumn({ 
            label: 'Actual Completion Date' 
        }),
        priority: StringColumn({
            label: 'Priority',
            choices: {
                high: { label: 'High', sequence: 0 },
                medium: { label: 'Medium', sequence: 1 },
                low: { label: 'Low', sequence: 2 },
            },
            default: 'medium',
            dropdown: 'dropdown_with_none'
        }),
        time_estimate: IntegerColumn({ 
            label: 'Estimated Hours',
            min: 0,
            max: 8  // Max 8 hours per day
        }),
        notes: StringColumn({ 
            label: 'Notes', 
            maxLength: 1000 
        }),
        owner: ReferenceColumn({ 
            label: 'Owner',
            referenceTable: 'sys_user',
            mandatory: true 
        }),
    },
    display: 'task',
    extensible: false,
    audit: true
})