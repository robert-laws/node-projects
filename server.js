const express = require('express');
const greeting = require('./greeting');

const app = express();

app.get('/', (req, res) => res.send(greeting.sayHello()));
app.listen('3000', () => console.log('listening on port 3000'));
