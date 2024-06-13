//const Issue = require("../models/issue")

const getIssue = async (req,res) => {
    console.log("getting issue")
    res.status(200).json({message: "Get Issues"})
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