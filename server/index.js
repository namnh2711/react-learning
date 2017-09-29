const express = require('express');

const app = express();

// app.use(express.static('client'));

app.set('view engine', 'ejs');

import ServerRender from './render';

app.get('/', (req, res) => {
    res.render('index', {
        content: ServerRender()
    })
});

app.listen(6789, () => console.log('Server is running...'));