const express = require('express')
const path = require('path')

const colors = require('colors')
const flash = require('connect-flash')

const hbs = require('hbs')
const bodyParser = require('body-parser')

const app = express()

// Using Static

app.use(express.static(path.join(__dirname, 'public')))

// Set View Engine
app.set('view engine', 'hbs')

// Time helper
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
})

// Body Parser middleware
//
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Local Variables using Middleware

// Load Routes

const home = require('./routes/home/index')

// Use Routes

app.use('/', home)

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   var err = new Error('Resource Not Found')
//   err.status = 404
//   next(err)
// })

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function (err, req, res, next) {
//     res.status(err.status || 500)
//     res.render('error', {
//       message: err.message,
//       error: err,
//     })
//   })
// }

// production error handler
// no stacktraces leaked to user
// app.use(function (err, req, res, next) {
//   res.status(err.status || 500)
//   res.render('error/error', {
//     message: err.message,
//     error: {},
//   })
// })

const port = process.env.PORT || 4500
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`.blue.inverse)
})
