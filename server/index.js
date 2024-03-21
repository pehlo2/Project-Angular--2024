const express = require('express');
const app = express();
const routes = require('./router.js');
const mongoose = require('mongoose')
const { auth } = require('./middlewares/authMiddleware.js');
mongoose.connect('mongodb://127.0.0.1:27017/SHOEstore').then(() => console.log('DB connected')).catch(err => console.log(err));
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser())

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
  // some legacy browsers (IE11, various SmartTVs) choke on 204,
 credentials: true
}

app.use(cors(corsOptions));
app.use(auth);


// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods',
//     'OPTIONS, GET, POST, PUT, PATCH, DELETE');
//     res.setHeader('Access-Control-Allow-Headers',
//     'Content-Type, Authorization');
//     next();
//     });




app.get('/', (req, res) => {
  res.send('Hello Server');

});
app.use(routes);
app.listen(3000, () => console.log('Server Start port 3000'));

