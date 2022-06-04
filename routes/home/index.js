const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('home/index', {
    title: 'Home',
    message: 'Welcome to the Course',
  })
})

module.exports = router
