const Issue = require("../models/issue")

const getIssue = async (req,res) => {
    try {
        const issues = await Issue.find({})
        res.status(200).json(issues)
        console.log("Issue data fetched")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const createIssue = async (req,res) => {
    const newIssue = req.body

    try {
        const issue = await Issue.create(newIssue)
        res.status(200).json(issue)
        console.log("Issue data created")
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateIssue = async (req,res) => {
    const { id } = req.params
    const updatedIssue = req.body

    try {
        const issue = await Issue.updateOne(
            { "id": id },
            { $set: updatedIssue}
        )
        res.status(200).json(
            {
                message: `Issue data at id: ${id} updated`,
                issue: issue 
            }
        )
        console.log(`Issue data at id: ${id} updated`)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteIssue = async (req,res) => {
    const { id } = req.params

    try {
        const issue = await Issue.deleteOne(
            { "id": id },
        )
        res.status(200).json(
            {
                message: `Issue data at id: ${id} deleted`,
                issue: issue 
            }
        )
        console.log(`Issue data at id: ${id} deleted`)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getIssue,
    createIssue,
    updateIssue,
    deleteIssue
}