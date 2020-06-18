const express = require('express');

require('./database');

const router = require('./routes');

const app = express();

app.use(express.json());
app.use(router);

app.listen(3001);