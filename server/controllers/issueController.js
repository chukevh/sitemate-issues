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
    res.status(200).json("Create Issue")
}

const updateIssue = async (req,res) => {
    res.status(200).json("Update Issue")
}

const deleteIssue = async (req,res) => {
    res.status(200).json("Delete Issue")
}

module.exports = {
    getIssue,
    createIssue,
    updateIssue,
    deleteIssue
}