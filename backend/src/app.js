const express = require('express'); // Server structure
const bodyParser = require('body-parser'); // Parse request bodies 
const morgan = require('morgan');
const path = require('path');
const cors = require('cors'); // Cross-Origin Resource Sharing - HTTP headers
const {
    errors
} = require('celebrate'); // Validation

const db = require('./database/connection'); // Var only used for the db connection, plz dont delete
const routes = require('./routes'); // Backend routes

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
app.use(routes);
app.use(errors);

module.exports = app;