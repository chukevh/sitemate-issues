import React from "react"
import IssueCard from "./IssueCard"

export default function IssueDisplay() {
    const [issues, setIssues] = React.useState([])

    React.useEffect(() => {
        try {
            fetch("/api/issue")
                .then((res)=>res.json())
                .then((data)=>setIssues(data))
        } catch (error) {
            console.log(error)
        }
    }, [])

    const sortedIssues = issues.sort((a,b) => a.id - b.id)

    const issueElement = sortedIssues.map((issue) => {
        return (
            <IssueCard 
                issue={issue}
                key={issue.id}
            />
        )
    })
    
    return (
        <>
            <h1>All Issues</h1>
            {issueElement}
        </>
    )
}