require('dotenv').config();
const chalk = require('chalk');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

const PORT = process.env.APP_PORT;

app.use(express.json({extended: true}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(PORT, () =>
  console.log(
    chalk.white.bgMagenta.bold(`Server has been started on port ${PORT}...`)
  )
);
