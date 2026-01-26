import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Sample 12 Week Cycle
export const sample_cycle_q1_2024 = Record({
    $id: Now.ID['cycle_q1_2024'],
    table: 'x_942105_12_week_y_twelve_week_cycle',
    data: {
        name: 'Q1 2024 Business Goals',
        start_date: '2024-01-01',
        end_date: '2024-03-24',
        vision: 'Transform our operations for scalable growth and improved customer satisfaction by implementing key process improvements and team development initiatives.',
        active: true,
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

// Sample Goals for the cycle
export const goal_process_improvement = Record({
    $id: Now.ID['goal_process_improve'],
    table: 'x_942105_12_week_y_goal',
    data: {
        title: 'Implement ServiceNow Process Automation',
        description: 'Deploy automated workflows for incident management and service requests to reduce manual work by 40% and improve response times.',
        twelve_week_cycle: sample_cycle_q1_2024,
        target_score: 85,
        priority: 1,
        active: true,
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

export const goal_team_development = Record({
    $id: Now.ID['goal_team_dev'],
    table: 'x_942105_12_week_y_goal',
    data: {
        title: 'Team Skills Development Program',
        description: 'Launch comprehensive training program to upskill team members in modern development practices and ServiceNow platform capabilities.',
        twelve_week_cycle: sample_cycle_q1_2024,
        target_score: 80,
        priority: 2,
        active: true,
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

// Sample Weekly Actions
export const action_week1_research = Record({
    $id: Now.ID['action_week1_research'],
    table: 'x_942105_12_week_y_weekly_action',
    data: {
        action: 'Research and document current manual processes that could benefit from automation',
        goal: goal_process_improvement,
        week_number: 1,
        planned_completion_date: '2024-01-07',
        completed: true,
        actual_completion_date: '2024-01-06',
        priority: 'high',
        time_estimate: 16,
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

export const action_week2_design = Record({
    $id: Now.ID['action_week2_design'],
    table: 'x_942105_12_week_y_weekly_action',
    data: {
        action: 'Design workflow architecture for incident management automation',
        goal: goal_process_improvement,
        week_number: 2,
        planned_completion_date: '2024-01-14',
        completed: false, // Will be set to true when all daily tactics are completed
        priority: 'high',
        time_estimate: 20,
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

export const action_week3_prototype = Record({
    $id: Now.ID['action_week3_proto'],
    table: 'x_942105_12_week_y_weekly_action',
    data: {
        action: 'Build and test prototype workflow for service request automation',
        goal: goal_process_improvement,
        week_number: 3,
        planned_completion_date: '2024-01-21',
        completed: false,
        priority: 'high',
        time_estimate: 24,
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

export const action_week1_assessment = Record({
    $id: Now.ID['action_week1_assess'],
    table: 'x_942105_12_week_y_weekly_action',
    data: {
        action: 'Conduct skills assessment survey and identify training needs',
        goal: goal_team_development,
        week_number: 1,
        planned_completion_date: '2024-01-07',
        completed: true,
        actual_completion_date: '2024-01-05',
        priority: 'medium',
        time_estimate: 8,
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

export const action_week2_curriculum = Record({
    $id: Now.ID['action_week2_curriculum'],
    table: 'x_942105_12_week_y_weekly_action',
    data: {
        action: 'Develop training curriculum and schedule for ServiceNow certification path',
        goal: goal_team_development,
        week_number: 2,
        planned_completion_date: '2024-01-14',
        completed: false,
        priority: 'medium',
        time_estimate: 12,
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

// Sample Daily Tactics for Week 2 Design Action (action_week2_design)
export const tactic_monday_research = Record({
    $id: Now.ID['tactic_mon_research'],
    table: 'x_942105_12_week_y_daily_tactic',
    data: {
        task: 'Review existing incident management process and identify automation opportunities',
        weekly_action: action_week2_design,
        planned_date: '2024-01-08',
        day_of_week: 'monday',
        completed: true,
        actual_completion_date: '2024-01-08',
        priority: 'high',
        time_estimate: 4,
        notes: 'Identified 5 key areas where automation can reduce manual work',
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

export const tactic_tuesday_diagram = Record({
    $id: Now.ID['tactic_tue_diagram'],
    table: 'x_942105_12_week_y_daily_tactic',
    data: {
        task: 'Create workflow diagrams for automated incident routing and assignment',
        weekly_action: action_week2_design,
        planned_date: '2024-01-09',
        day_of_week: 'tuesday',
        completed: true,
        actual_completion_date: '2024-01-09',
        priority: 'high',
        time_estimate: 4,
        notes: 'Completed workflow diagrams using Visio',
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

export const tactic_wednesday_specs = Record({
    $id: Now.ID['tactic_wed_specs'],
    table: 'x_942105_12_week_y_daily_tactic',
    data: {
        task: 'Write technical specifications for workflow implementation',
        weekly_action: action_week2_design,
        planned_date: '2024-01-10',
        day_of_week: 'wednesday',
        completed: true,
        actual_completion_date: '2024-01-10',
        priority: 'high',
        time_estimate: 4,
        notes: 'Technical specs completed and reviewed',
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

export const tactic_thursday_review = Record({
    $id: Now.ID['tactic_thu_review'],
    table: 'x_942105_12_week_y_daily_tactic',
    data: {
        task: 'Conduct stakeholder review of workflow design and gather feedback',
        weekly_action: action_week2_design,
        planned_date: '2024-01-11',
        day_of_week: 'thursday',
        completed: true,
        actual_completion_date: '2024-01-11',
        priority: 'medium',
        time_estimate: 3,
        notes: 'Stakeholders approved design with minor suggestions',
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

export const tactic_friday_finalize = Record({
    $id: Now.ID['tactic_fri_finalize'],
    table: 'x_942105_12_week_y_daily_tactic',
    data: {
        task: 'Finalize workflow architecture documentation and create implementation plan',
        weekly_action: action_week2_design,
        planned_date: '2024-01-12',
        day_of_week: 'friday',
        completed: true,
        actual_completion_date: '2024-01-12',
        priority: 'high',
        time_estimate: 5,
        notes: 'Architecture finalized and implementation plan ready',
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

// Daily Tactics for Week 3 Prototype (action_week3_prototype) - Some incomplete to test automation
export const tactic_prototype_monday = Record({
    $id: Now.ID['tactic_proto_mon'],
    table: 'x_942105_12_week_y_daily_tactic',
    data: {
        task: 'Set up ServiceNow development environment and create basic workflow',
        weekly_action: action_week3_prototype,
        planned_date: '2024-01-15',
        day_of_week: 'monday',
        completed: true,
        actual_completion_date: '2024-01-15',
        priority: 'high',
        time_estimate: 6,
        notes: 'Development environment configured successfully',
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

export const tactic_prototype_tuesday = Record({
    $id: Now.ID['tactic_proto_tue'],
    table: 'x_942105_12_week_y_daily_tactic',
    data: {
        task: 'Implement automated incident assignment logic and business rules',
        weekly_action: action_week3_prototype,
        planned_date: '2024-01-16',
        day_of_week: 'tuesday',
        completed: true,
        actual_completion_date: '2024-01-16',
        priority: 'high',
        time_estimate: 5,
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

export const tactic_prototype_wednesday = Record({
    $id: Now.ID['tactic_proto_wed'],
    table: 'x_942105_12_week_y_daily_tactic',
    data: {
        task: 'Build notification templates and test automated communications',
        weekly_action: action_week3_prototype,
        planned_date: '2024-01-17',
        day_of_week: 'wednesday',
        completed: false, // This will keep the weekly action incomplete
        priority: 'medium',
        time_estimate: 4,
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

export const tactic_prototype_thursday = Record({
    $id: Now.ID['tactic_proto_thu'],
    table: 'x_942105_12_week_y_daily_tactic',
    data: {
        task: 'Conduct initial testing with sample incidents',
        weekly_action: action_week3_prototype,
        planned_date: '2024-01-18',
        day_of_week: 'thursday',
        completed: false, // This will keep the weekly action incomplete
        priority: 'high',
        time_estimate: 5,
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})

export const tactic_prototype_friday = Record({
    $id: Now.ID['tactic_proto_fri'],
    table: 'x_942105_12_week_y_daily_tactic',
    data: {
        task: 'Document test results and prepare prototype demo for stakeholders',
        weekly_action: action_week3_prototype,
        planned_date: '2024-01-19',
        day_of_week: 'friday',
        completed: false,
        priority: 'medium',
        time_estimate: 4,
        owner: 'admin'
    },
    $meta: {
        installMethod: 'demo'
    }
})