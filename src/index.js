const app = require('express')();
const faunadb = require('faunadb')
require('dotenv').config()
const client = new faunadb.Client({ secret: process.env.FAUNA_SECRET })

app.listen(5000 , () => console.log('API on http://localhost:5000'))

