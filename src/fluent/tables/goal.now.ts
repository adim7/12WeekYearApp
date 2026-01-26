import '@servicenow/sdk/global'
import { Table, StringColumn, IntegerColumn, ReferenceColumn, BooleanColumn } from '@servicenow/sdk/core'

// Creates the Goals table to store main objectives for each 12-week cycle
export const x_942105_12_week_y_goal = Table({
    name: 'x_942105_12_week_y_goal',
    label: '12 Week Goal',
    schema: {
        title: StringColumn({ 
            label: 'Goal Title', 
            maxLength: 200,
            mandatory: true 
        }),
        description: StringColumn({ 
            label: 'Goal Description', 
            maxLength: 4000 
        }),
        twelve_week_cycle: ReferenceColumn({ 
            label: '12 Week Cycle',
            referenceTable: 'x_942105_12_week_y_twelve_week_cycle',
            mandatory: true 
        }),
        target_score: IntegerColumn({ 
            label: 'Target Execution Score (%)',
            min: 0,
            max: 100,
            default: 85
        }),
        current_score: IntegerColumn({ 
            label: 'Current Execution Score (%)',
            min: 0,
            max: 100,
            read_only: true,
            default: 0
        }),
        priority: IntegerColumn({ 
            label: 'Priority',
            min: 1,
            max: 10,
            default: 5
        }),
        active: BooleanColumn({ 
            label: 'Active',
            default: true 
        }),
        owner: ReferenceColumn({ 
            label: 'Owner',
            referenceTable: 'sys_user',
            mandatory: true 
        }),
    },
    display: 'title',
    extensible: false,
    audit: true
})