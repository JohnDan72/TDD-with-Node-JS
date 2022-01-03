const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const { users } = require('./endpoints');
const port = 3000;

const usersHandlers = users({ axios })

//cors
app.use(cors());
//lectura y parseo del body
app.use(express.json());

app.get('/', usersHandlers.get );

app.post('/', usersHandlers.post);

app.put('/:uid', usersHandlers.put);

app.delete('/:uid', usersHandlers.delete);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))