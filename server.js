const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

let dbconfig = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'randyh',
    password: 'wasWonwoah',
    database: 'smartbrain',
  },
};

if (process.env.DATABASE_URL) {
  dbconfig = {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: true,
    },
  };
}

const db = require('knex')(dbconfig);

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('it is working!');
});
app.post('/signin', signin.handleSignin(db, bcrypt));
app.post('/register', register.handleRegister(db, bcrypt));
app.get('/profile/:id', profile.handleProfileGet(db));
app.put('/image', image.handleImage(db));
app.post('/imageurl', image.handleApiCall);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
