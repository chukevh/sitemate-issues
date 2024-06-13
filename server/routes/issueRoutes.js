const express = require('express')
const router = express.Router()

const {
    getIssue,
    createIssue,
    updateIssue,
    deleteIssue
} = require("../controllers/issueController")

router.get('/', getIssue)
router.post('/', createIssue)
router.put('/:id', updateIssue)
router.delete('/:id', deleteIssue)

module.exports = router