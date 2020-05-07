const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');

app.listen(process.env.PORT || 3333, () => {
    console.log('Server is Running!');
});