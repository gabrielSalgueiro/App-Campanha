const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.json({ hello: "world" });
})

routes.use('/members', require('./routes/members'));
module.exports = routes;