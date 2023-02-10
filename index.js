const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.get('/trang-chu', (req, res) => res.send("hello world!"));

app.listen(port,()=>{console.log(`{EX at https://localhost:${port}}`)})