const express = require('express');
const mongoose = require('mongoose');
const { router: articleRouter } = require('./router');
mongoose
  .connect('mongodb://localhost:27017/HW-backend-1', { useNewUrlParser: true })
  .then((host) => {
    console.log(
      'Db connected => ',
      host.connection.host + ':' + host.connection.port
    );
  });

const app = express();

app.use(express.json());
app.use('/articles', articleRouter);

exports.app = app;