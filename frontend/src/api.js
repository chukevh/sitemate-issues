export async function createIssue(id, title, description) {
    try {
        const res = await fetch("/api/issue",
            {
                method: "post", 
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(
                    { 
                        id: id,
                        title: title,
                        description: description 
                    }
                ) 
            }
        )
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export async function updateIssue(id, title, description) {
    try {
        const res = await fetch(`/api/issue/${id}`,
            {
                method: "put", 
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(
                    { 
                        title: title,
                        description: description 
                    }
                ) 
            }
        )
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export async function deleteIssue(id) {
    try {
        const res = await fetch(`/api/issue/${id}`,
            {
                method: "delete", 
            }
        )
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error.message)
    }
}

