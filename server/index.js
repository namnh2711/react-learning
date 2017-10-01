// import ServerRender from './render';
import apiRouter from './apiRouter';

const express = require('express');
// const cors = require('cors');

const app = express();

app.use(express.static('client'));
// app.use(cors());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    content: '', // ServerRender(),
  });
});

app.use('/api', apiRouter);

app.listen(6789, () => console.log('Server is running...'));
