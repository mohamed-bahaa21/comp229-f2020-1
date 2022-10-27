const path = require('path')
const express = require('express')
const router = express.Router()

const controller = require(path.resolve(__basename, 'controllers', 'app.controllers'))

router.get('/', controller.getLanding)

module.exports = router