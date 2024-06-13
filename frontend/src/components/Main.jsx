import IssueDisplay from "./IssueDisplay";
import IssueCRUD from "./IssueCRUD";

export default function Main() {
    return (
        <>
            <div className="main">
                <div className="issue-display issues-container">
                    <IssueDisplay />
                </div>
                <div className="issue-controller issues-container">
                    <h1>Issues</h1>
                    <IssueCRUD />
                </div>
            </div>
        </>
    )
}