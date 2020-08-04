require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { User, Post, connectDb } = require('./models');

const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('./'));

app.get('/users', (req, res) => {
  User.find({})
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/posts', (req, res) => {
  Post.find({})
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.put('/posts/:postId/like', (req, res) => {
  const query = { _id: req.params.postId };
  Post.findOneAndUpdate(query, {
    $inc: {
      postLikes: 1,
    },
  })
    .exec()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.put('/posts/:postId/dislike', (req, res) => {
  const query = { _id: req.params.postId };
  Post.findOneAndUpdate(query, {
    $inc: {
      postDislikes: 1,
    },
  })
    .exec()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
    });
});

const willSeedDatabase = false;

connectDb().then(async () => {
  if (willSeedDatabase) {
    await Promise.all([User.deleteMany({}), Post.deleteMany({})]);

    createUsers();
    createPosts();
  }

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Back-end server listening on port ${process.env.PORT}!`);
  });
});

const createUsers = async () => {
  const user = new User({
    username: 'haihenry',
    profilePic: 'https://cdn2.thecatapi.com/images/bk.jpg',
  });

  await user.save();
};

const createPosts = async () => {
  const post = new Post({
    username: 'haihenry',
    postImage: 'https://cdn2.thecatapi.com/images/MTk4MTkyMg.jpg',
    postLikes: 8,
    postDislikes: 0,
    postDesc: 'Taking a cat nap with bae. #hottie #respect #catnap',
  });

  await post.save();
};
