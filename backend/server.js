require("dotenv").config();
const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const Router = require('./web/routes');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');

global.rootDirectory = path.resolve(__dirname);

app.use(cookieParser());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true
}).then(() => {
    console.log("database connected");
}).catch((err) => {
    console.log(err);
})


app.use(Router);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})