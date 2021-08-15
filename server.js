var express = require('express')
var Provider = require('oidc-provider')

var provider = new Provider('http://localhost:4000', {
  clients: [
    {
      client_id: 'foo',
      client_secret: 'bar',
      redirect_uris: [
        'http://localhost:3000/connect/panva/callback'
      ]
    }
  ],
})

express()
  .use(provider.callback())
  .listen(4000)
