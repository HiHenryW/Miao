require('dotenv').config();
const cors = require('cors');
const express = require('express');
const path = require('path');
const { User, Post, Comments, connectDb } = require('./models');
const { sampleUsers, samplePosts } = require('./seed');

const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/users', (req, res) => {
  User.find({})
    .exec()
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/posts', (req, res) => {
  Post.find({})
    .sort('-createdAt')
    .exec()
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

app.post('/posts/:postId', (req, res) => {
  const comment = new Comments({
    postId: req.params.postId,
    commentText: req.body.commentText,
    userName: req.body.userName,
  });
  comment.save((err, comment) => {
    if (err) {
      console.log(err);
      return;
    }

    res.status(201).json(comment);
  });
});

// WARNING: setting this to true will overwrite db data!
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

const createUsers = () => {
  User.create(sampleUsers).catch((err) => {
    console.log(err);
  });
};

const createPosts = () => {
  Post.create(samplePosts).catch((err) => {
    console.log(err);
  });
};
