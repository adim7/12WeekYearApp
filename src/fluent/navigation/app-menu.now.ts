import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'

// Create application category for menu styling
export const twelve_week_year_category = Record({
    $id: Now.ID['twelve_week_category'],
    table: 'sys_app_category',
    data: {
        name: '12 Week Year',
        style: 'border-color: #2c5aa0; background-color: #e8f4fd; background-image: url("images/icons/calendar_24.png");'
    }
})

// Create main application menu
export const twelve_week_year_menu = ApplicationMenu({
    $id: Now.ID['twelve_week_year_menu'],
    title: '12 Week Year',
    description: 'Operationalize the 12 Week Year methodology for focused goal achievement',
    hint: 'Plan and execute 12-week cycles, goals, actions, and daily tactics',
    category: twelve_week_year_category,
    active: true,
    order: 100
})

// Main Tables Section
export const cycles_module = Record({
    $id: Now.ID['cycles_module'],
    table: 'sys_app_module',
    data: {
        title: '12 Week Cycles',
        application: twelve_week_year_menu.$id,
        link_type: 'LIST',
        name: 'x_942105_12_week_y_twelve_week_cycle',
        hint: 'Manage 12-week planning periods and track overall execution',
        active: true,
        order: 100
    }
})

export const goals_module = Record({
    $id: Now.ID['goals_module'],
    table: 'sys_app_module',
    data: {
        title: 'Goals',
        application: twelve_week_year_menu.$id,
        link_type: 'LIST',
        name: 'x_942105_12_week_y_goal',
        hint: 'Define and track your 12-week goals and execution scores',
        active: true,
        order: 200
    }
})

export const weekly_actions_module = Record({
    $id: Now.ID['weekly_actions_module'],
    table: 'sys_app_module',
    data: {
        title: 'Weekly Actions',
        application: twelve_week_year_menu.$id,
        link_type: 'LIST',
        name: 'x_942105_12_week_y_weekly_action',
        hint: 'Plan and execute weekly commitments toward your goals',
        active: true,
        order: 300
    }
})

export const daily_tactics_module = Record({
    $id: Now.ID['daily_tactics_module'],
    table: 'sys_app_module',
    data: {
        title: 'Daily Tactics',
        application: twelve_week_year_menu.$id,
        link_type: 'LIST',
        name: 'x_942105_12_week_y_daily_tactic',
        hint: 'Manage daily tasks that drive weekly action completion',
        active: true,
        order: 400
    }
})

// Planning & Documentation Section
export const planning_separator = Record({
    $id: Now.ID['planning_separator'],
    table: 'sys_app_module',
    data: {
        title: 'Planning & Documentation',
        application: twelve_week_year_menu.$id,
        link_type: 'SEPARATOR',
        active: true,
        order: 500
    }
})

export const design_document_module = Record({
    $id: Now.ID['design_doc_module'],
    table: 'sys_app_module',
    data: {
        title: 'Design Document & User Guide',
        application: twelve_week_year_menu.$id,
        link_type: 'DIRECT',
        query: 'twelve_week_year_documentation.do',
        hint: 'Complete application design document and user instructions',
        active: true,
        order: 510
    }
})