import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

// Create a simpler HTML page that will render properly
export const design_document_page_record = Record({
    $id: Now.ID['design_doc_page_record'],
    table: 'sys_ui_page',
    data: {
        name: 'twelve_week_year_documentation',
        title: '12 Week Year - Design Document',
        category: 'general',
        description: '12 Week Year Application Design Document and User Guide',
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
<title>12 Week Year Application - Design Document</title>
<style>
body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
h1 { color: #2c5aa0; text-align: center; border-bottom: 3px solid #2c5aa0; }
h2 { color: #2c5aa0; border-bottom: 2px solid #e8f4fd; padding-bottom: 10px; }
h3 { color: #1a365d; }
.hierarchy { background: #f8f9fa; padding: 15px; text-align: center; border-radius: 8px; margin: 20px 0; }
.step { background: #f8f9fa; padding: 15px; margin: 15px 0; border-left: 4px solid #2c5aa0; }
ol, ul { padding-left: 25px; }
li { margin: 8px 0; }
strong { color: #1a365d; }
.footer { background: #2c5aa0; color: white; text-align: center; padding: 15px; margin-top: 30px; }
</style>
</head>
<body>

<h1>12 Week Year Application</h1>
<h2 style="text-align: center; color: #666; margin-top: 0;">Design Document &amp; User Guide</h2>

<h2>1. Application Overview</h2>
<p>The <strong>12 Week Year Application</strong> operationalizes the proven 12 Week Year methodology for focused goal achievement. This application transforms traditional annual planning into highly focused 12-week execution cycles.</p>

<h3>Key Benefits:</h3>
<ul>
<li><strong>Enhanced Focus:</strong> Eliminate distractions and concentrate on what matters most</li>
<li><strong>Data-Driven Decisions:</strong> Real-time execution scores inform strategic adjustments</li>
<li><strong>Faster Results:</strong> Short cycles create urgency and accelerate achievement</li>
<li><strong>Continuous Improvement:</strong> Regular cycle reviews drive iterative refinement</li>
</ul>

<h2>2. Application Hierarchy</h2>
<div class="hierarchy">
<strong>12 Week Cycle → Goals → Weekly Actions → Daily Tactics</strong>
</div>

<h3>Core Tables:</h3>
<ul>
<li><strong>12 Week Cycles:</strong> Track 12-week planning periods with vision and execution scores</li>
<li><strong>Goals:</strong> Store 1-3 focused objectives per cycle with target/current scores</li>
<li><strong>Weekly Actions:</strong> Plan weekly commitments with completion tracking</li>
<li><strong>Daily Tactics:</strong> Break weekly actions into daily tasks (Mon-Fri)</li>
</ul>

<h2>3. Getting Started Guide</h2>

<div class="step">
<h3>Step 1: Create a 12 Week Cycle</h3>
<ol>
<li>Navigate to <strong>12 Week Year → 12 Week Cycles</strong></li>
<li>Click <strong>New</strong> to create a cycle</li>
<li>Enter descriptive name (e.g. "Q1 2024 Growth Initiative")</li>
<li>Set start/end dates (84 days apart)</li>
<li>Write inspiring vision statement</li>
</ol>
</div>

<div class="step">
<h3>Step 2: Define Goals (1-3 Maximum)</h3>
<ol>
<li>Navigate to <strong>12 Week Year → Goals</strong></li>
<li>Link to your 12-week cycle</li>
<li>Write clear, specific goal title</li>
<li>Set target execution score (80-90% realistic)</li>
<li>Assign priority ranking (1 = highest)</li>
</ol>
</div>

<div class="step">
<h3>Step 3: Plan Weekly Actions</h3>
<ol>
<li>From Goal record → <strong>Weekly Actions</strong> related list</li>
<li>Create 5-15 specific actions per goal</li>
<li>Distribute across weeks 1-12</li>
<li>Set realistic completion dates and time estimates</li>
</ol>
</div>

<div class="step">
<h3>Step 4: Break Down Daily Tactics</h3>
<ol>
<li>From Weekly Action → <strong>Daily Tactics</strong> related list</li>
<li>Create 1-5 specific tasks per action</li>
<li>Assign to specific days (Mon-Fri)</li>
<li>Estimate hours per task (max 8 per day)</li>
</ol>
</div>

<h2>4. Intelligent Automation</h2>
<p><strong>The application automatically calculates execution scores:</strong></p>
<ul>
<li>Complete all daily tactics → Weekly action auto-completes</li>
<li>Weekly actions complete → Goal execution score updates</li>
<li>Goal scores update → Cycle overall score recalculates</li>
</ul>

<h2>5. Success Metrics</h2>
<ul>
<li><strong>85%+ Execution Score:</strong> Excellent execution discipline</li>
<li><strong>70-84% Execution Score:</strong> Good performance with improvement room</li>
<li><strong>Below 70%:</strong> Requires immediate attention and plan adjustment</li>
</ul>

<h2>6. Best Practices</h2>

<h3>Planning:</h3>
<ul>
<li>Keep goals few &amp; focused (1-3 per cycle)</li>
<li>Make actions specific and measurable</li>
<li>Plan daily tactics as 2-4 hour tasks</li>
<li>Set realistic 85% execution targets initially</li>
</ul>

<h3>Execution:</h3>
<ul>
<li>Review daily tactics each morning</li>
<li>Time block specific periods for each tactic</li>
<li>Update completion immediately when finished</li>
<li>Track obstacles and solutions in notes</li>
</ul>

<h2>7. Daily &amp; Weekly Execution</h2>

<h3>Daily Routine:</h3>
<ol>
<li>Review today's tactics in <strong>Daily Tactics</strong> list</li>
<li>Focus on completing scheduled tasks</li>
<li>Mark tasks complete as you finish</li>
<li>Add notes for lessons learned</li>
</ol>

<h3>Weekly Review:</h3>
<ol>
<li>Review execution scores in <strong>Goals</strong></li>
<li>Analyze completed vs planned actions</li>
<li>Plan next week's tactics</li>
<li>Adjust priorities based on progress</li>
</ol>

<h2>8. Navigation Guide</h2>
<p><strong>Access through the 12 Week Year application menu:</strong></p>
<ul>
<li><strong>12 Week Cycles:</strong> High-level cycle management</li>
<li><strong>Goals:</strong> Goal definition and progress tracking</li>
<li><strong>Weekly Actions:</strong> Weekly commitment planning</li>
<li><strong>Daily Tactics:</strong> Daily task execution</li>
</ul>

<p><strong>Navigation Tips:</strong></p>
<ul>
<li>Start planning at the cycle level</li>
<li>Use related lists for hierarchical navigation</li>
<li>Filter lists to focus on active/current items</li>
<li>Bookmark frequently used views</li>
</ul>

<h2>9. Troubleshooting</h2>

<h3>Execution Scores Not Updating:</h3>
<p><strong>Solution:</strong> Verify all daily tactics for a weekly action are marked complete. Check business rules are active.</p>

<h3>Related Lists Not Showing:</h3>
<p><strong>Solution:</strong> Ensure proper table relationships and role permissions.</p>

<h3>Performance Issues:</h3>
<p><strong>Solution:</strong> Use appropriate list filters, especially for Daily Tactics. Archive old completed cycles.</p>

<div class="footer">
<p><strong>12 Week Year Application</strong> - Built on ServiceNow Platform | Version 1.0</p>
<p>For support, contact your ServiceNow administrator</p>
</div>

</body>
</html>`,
        direct: true
    }
})