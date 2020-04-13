const express = require('express'); // Server structure
const cors = require('cors'); // Cross-Origin Resource Sharing - HTTP headers
const { errors } = require('celebrate'); // Validation
const db = require('./database/connection');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors);

module.exports = app;