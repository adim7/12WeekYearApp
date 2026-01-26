import '@servicenow/sdk/global'
import { Table, StringColumn, IntegerColumn, ReferenceColumn, BooleanColumn, DateColumn } from '@servicenow/sdk/core'

// Creates the Weekly Actions table to track weekly commitments and execution
export const x_942105_12_week_y_weekly_action = Table({
    name: 'x_942105_12_week_y_weekly_action',
    label: 'Weekly Action',
    schema: {
        action: StringColumn({ 
            label: 'Action Description', 
            maxLength: 500,
            mandatory: true 
        }),
        goal: ReferenceColumn({ 
            label: 'Goal',
            referenceTable: 'x_942105_12_week_y_goal',
            mandatory: true 
        }),
        week_number: IntegerColumn({ 
            label: 'Week Number',
            min: 1,
            max: 12,
            mandatory: true
        }),
        planned_completion_date: DateColumn({ 
            label: 'Planned Completion Date' 
        }),
        actual_completion_date: DateColumn({ 
            label: 'Actual Completion Date' 
        }),
        completed: BooleanColumn({ 
            label: 'Completed',
            default: false 
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
            min: 0 
        }),
        owner: ReferenceColumn({ 
            label: 'Owner',
            referenceTable: 'sys_user',
            mandatory: true 
        }),
    },
    display: 'action',
    extensible: false,
    audit: true
})