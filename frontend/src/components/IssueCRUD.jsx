import React from "react"
import { createIssue, updateIssue, deleteIssue } from "../api"

export default function IssueCRUD() {
    const [form, setForm] = React.useState(
        {
            id: "",
            title: "",
            description: "",
            option: "create"
        }
    )

    function handleChange(event) {
        const {name, value} = event.target
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    function handleSubmit() {
        switch(form.option) {
            case "create":
                createIssue(form.id, form.title, form.description)
                break;
            case "update":
                updateIssue(form.id, form.title, form.description)
                break;
            case "delete":
                deleteIssue(form.id)
                break;
            default:
                return new Error("Submission Error")
        }
    }

    return (
        <>
            <fieldset className="fieldset-container">
                <label>
                    <input 
                        type="radio" 
                        value="create" 
                        id="create" 
                        name="option"
                        checked={form.option === "create"}
                        onChange={handleChange}
                    />
                    Create
                </label>

                <label>
                    <input 
                        type="radio" 
                        value="update" 
                        id="update" 
                        name="option"
                        checked={form.option === "update"}
                        onChange={handleChange}
                    />
                    Update
                </label>

                <label>
                    <input 
                        type="radio" 
                        value="delete" 
                        id="delete" 
                        name="option"
                        checked={form.option === "delete"}
                        onChange={handleChange}
                    />
                    Delete
                </label>
            </fieldset>

            <form className="form-container" onSubmit={handleSubmit}>
                <label className="form-text">Id:</label>
                <input
                    type="number"
                    value={form.id}
                    name="id"
                    onChange={handleChange}
                />
                {
                    (form.option === "create" || form.option ===  "update") &&
                    <>
                        <label className="form-text">Title:</label>
                        <input
                            type="string"
                            value={form.title}
                            name="title"
                            onChange={handleChange}
                        />
                        <label className="form-text">Description:</label>
                        <input
                            type="string"
                            value={form.description}
                            name="description"
                            onChange={handleChange}
                        />
                    </>
                }
                <button className="form-button">Submit</button>
            </form>
        </>
    )
}