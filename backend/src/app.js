const express = require('express'); // Server structure
const bodyParser = require('body-parser'); // Parse request bodies
const methodOverride = require('method-override'); // Enable to use PUT and DELETE methods
const cors = require('cors'); // Cross-Origin Resource Sharing - HTTP headers
const { errors } = require('celebrate'); // Validation
const db = require('./database/connection');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());
app.use(methodOverride("_method"));
app.use(routes);
app.use(errors);

module.exports = app;