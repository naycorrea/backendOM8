const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://nayara:190993@cluster0-8doqy.mongodb.net/omnistack8?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);