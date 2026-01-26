import '@servicenow/sdk/global'
import { Table, StringColumn, DateColumn, BooleanColumn, IntegerColumn, ReferenceColumn } from '@servicenow/sdk/core'

// Creates the 12 Week Cycle table to track 12-week planning periods
export const x_942105_12_week_y_twelve_week_cycle = Table({
    name: 'x_942105_12_week_y_twelve_week_cycle',
    label: '12 Week Cycle',
    schema: {
        name: StringColumn({ 
            label: 'Cycle Name', 
            maxLength: 120,
            mandatory: true 
        }),
        start_date: DateColumn({ 
            label: 'Start Date',
            mandatory: true 
        }),
        end_date: DateColumn({ 
            label: 'End Date',
            mandatory: true 
        }),
        vision: StringColumn({ 
            label: 'Vision Statement', 
            maxLength: 1000 
        }),
        active: BooleanColumn({ 
            label: 'Active Cycle',
            default: true 
        }),
        execution_score: IntegerColumn({ 
            label: 'Overall Execution Score (%)',
            min: 0,
            max: 100,
            read_only: true
        }),
        owner: ReferenceColumn({ 
            label: 'Owner',
            referenceTable: 'sys_user',
            mandatory: true 
        }),
    },
    display: 'name',
    extensible: false,
    audit: true
})