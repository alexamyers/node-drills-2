require('dotenv').config();
const port = process.env.PORT || 3035;
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const {getUserInput, createInput} = require('./controller');

app.get('/api/info', getUserInput)
app.post('/api/info', createInput)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})