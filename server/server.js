const express = require("express");

const app = express();
require('dotenv').config();//to handle env
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');

//////////////////////////////////
// DB initialization & setup 
//////////////////////////////////
const connectDB = require('./config/db');
connectDB(); // db connect

//////////////////////////////////
// MIDDLEWARES
//////////////////////////////////
app.use(express.json({extended : false})); //instead of body parser. Body parser is included again after 4.16 express

// Define Routes from express router
app.use('/api/movies', require('./api/movies.js'));

app.use(express.static(publicPath)); //It serves static files and is based on serve-static.where are the static files. where are the static files

//=================================
//          APIS END
//=================================

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const port = process.env.PORT || 3005;
app.listen(port, () => console.log(`Listening on port ${port}`));