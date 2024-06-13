import React from "react"

export default function App() {
  const [issue, setIssues] = React.useState([])

  React.useEffect(() => {
    try {
      fetch("/api", {
          method: "get",
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
        .then((res)=>res.json())
        .then((data)=>console.log(data))
    } catch (error) {
      console.log(error)
    }

  }, [])

  return (
    <>
      <div>
        Test
        {issue}
      </div>
    </>
  )
}
