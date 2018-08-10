const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const _ = require('lodash');

var { mongoose } = require('./db/mongoose');
const userRoute = require('./routes/userRoute');
const noteRoute = require('./routes/noteRoute');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    allowedHeaders: ['Accept-Version', 'Authorization', 'Credentials', 'Content-Type'],
    exposedHeaders: ['x-auth'],
}
app.use(cors(corsOptions))
app.use(bodyParser.json());


app.use('/users', userRoute);
app.use('/notes', noteRoute);

app.listen(8080, () => {
    console.log("Server start at port 8080");
})