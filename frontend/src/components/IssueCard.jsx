export default function IssueCard(props) {
    const issue = props.issue

    return (
        <>
            <div className="issue-card-container">
                <h3>Issue ID: {issue.id}</h3>
                <h4>Issue: {issue.title}</h4>
                <span>Description: {issue.description}</span>
            </div>
        </>
    )
}