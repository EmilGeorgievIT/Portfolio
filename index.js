const express = require('express');
const bodyParser = require('body-parser');
const mailRouter = require('./routes/contacts');
const cors =  require('cors');
const helmet = require('helmet');
const compression = require('compression');

const path = require('path');
const { port } = require('./config/config');
const app = express();
const server = app.listen(port, () => { console.log(`REST API listening on port: ${port}`) });

app.use(helmet());
app.use(cors())
app.use(compression());
app.use(bodyParser.json({limit: '50mb'}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/contact', mailRouter);


// General error handling

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
  next();
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}