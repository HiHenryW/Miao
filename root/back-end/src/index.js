import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import models, { connectDb } from './models';

const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  // don't forget to reference models here
  return res.send('Root of directory reached!');
});

const willSeedDatabase = true;

connectDb().then(async () => {
  if (willSeedDatabase) {
    await Promise.all([models.User.deleteMany({})]);

    createUsers();
  }

  app.listen(process.env.PORT, () => {
    console.log(`Back-end server listening on port ${process.env.PORT}!`);
  });
});

const createUsers = async () => {
  const user = new models.User({
    username: 'haihenry',
    profilePic: 'https://cdn2.thecatapi.com/images/bk.jpg',
  });

  await user.save();
};
