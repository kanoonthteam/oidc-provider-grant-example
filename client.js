var express = require('express')
var session = require('express-session')
var grant = require('grant').express()


express()
  .use(session({secret: 'grant', saveUninitialized: true, resave: false}))
  .use(grant(require('./config.json')))
  .get('/hello', (req, res) => {
    res.end(JSON.stringify(req.session.grant.response, null, 2))
  })
  .listen(3000)
  