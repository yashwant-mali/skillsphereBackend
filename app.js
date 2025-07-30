const express = require('express');
const bodyParser = require('body-parser');
const registerRoute = require('./routes/RegisterRoute');
const imageRoute = require('./routes/imagesRoute');
const teacherRoute = require('./routes/teachersRoute');
const cors = require('cors');
const app = express();
app.use(express.json());
// Allow requests from frontend on port 3001
app.use(cors({ origin: 'http://localhost:3000' }));
// OR to allow all origins (not recommended for production)
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/register', registerRoute);
// app.get('/', (req, res) => res.redirect('/register'));

app.use('/images', imageRoute);
app.use('/teachers', teacherRoute);



module.exports = app;
