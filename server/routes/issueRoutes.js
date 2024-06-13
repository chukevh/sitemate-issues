const express = require('express')
const router = express.Router()



router.get('/', getIssue)
router.post('/', createIssue)
router.put('/:id', updateIssue)
router.delete('/:id', deleteIssue)

module.exports = router