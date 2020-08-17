const sampleUsers = [
  {
    username: 'hihenry',
    profilePic: 'https://cdn2.thecatapi.com/images/bk.jpg',
    description: 'Based in NYC currently.',
  },
  {
    username: 'whatdoesthefoxsay',
    profilePic:
      'https://images.unsplash.com/photo-1516934024742-b461fba47600?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    description: 'I work the hardest and play the hardest.',
  },
  {
    username: 'skinnygrizzly',
    profilePic:
      'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_340.jpg',
    description: 'My spirit animal is a grizzly bear.',
  },
];

const samplePosts = [
  {
    username: 'hihenry',
    postImage: 'https://cdn2.thecatapi.com/images/MTk4MTkyMg.jpg',
    postLikes: 0,
    postDislikes: 0,
    postDesc: 'Taking a cat nap with bae.',
  },
  {
    username: 'whatdoesthefoxsay',
    postImage:
      'https://images.unsplash.com/photo-1522162363424-d29ded2ad958?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
    postLikes: 0,
    postDislikes: 0,
    postDesc: 'Wa-pa-pa-pa-pa-pa-pow!',
  },
  {
    username: 'skinnygrizzly',
    postImage: 'https://cdn2.thedogapi.com/images/aENh7kMis.jpg',
    postLikes: 0,
    postDislikes: 0,
    postDesc: 'This is my best friend Karen. She is pretty ripped.',
  },
  {
    username: 'hihenry',
    postImage:
      'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    postLikes: 0,
    postDislikes: 0,
    postDesc: 'Feeling pretty sleepy, is it Friday yet?',
  },
  {
    username: 'hihenry',
    postImage:
      'https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=726&q=80',
    postLikes: 0,
    postDislikes: 0,
    postDesc: 'Thinking about my covid-19lbs.',
  },
  {
    username: 'hihenry',
    postImage:
      'https://images.unsplash.com/photo-1493406300581-484b937cdc41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    postLikes: 0,
    postDislikes: 0,
    postDesc:
      'Visited the bay the other day. Pretty sick view. Almost fell in!',
  },
  {
    username: 'hihenry',
    postImage:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
    postLikes: 0,
    postDislikes: 0,
    postDesc: 'Au naturale glamour shot!',
  },
  {
    username: 'whatdoesthefoxsay',
    postImage:
      'https://images.unsplash.com/photo-1518526157563-b1ee37a05129?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    postLikes: 0,
    postDislikes: 0,
    postDesc: 'Missing the colder days.',
  },
  {
    username: 'whatdoesthefoxsay',
    postImage:
      'https://images.unsplash.com/photo-1516590914727-51e55df118d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80',
    postLikes: 0,
    postDislikes: 0,
    postDesc: 'I might have seen a ghost the other day.',
  },
  {
    username: 'whatdoesthefoxsay',
    postImage:
      'https://images.unsplash.com/photo-1444845026749-81acc3926736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1645&q=80',
    postLikes: 0,
    postDislikes: 0,
    postDesc: 'Working on my poses, this is a good angle of me right?',
  },
  {
    username: 'whatdoesthefoxsay',
    postImage:
      'https://images.unsplash.com/photo-1591533827986-6d1e04132b5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80',
    postLikes: 0,
    postDislikes: 0,
    postDesc: 'Tremendous picnic the other day with my buddies!',
  },
  {
    username: 'skinnygrizzly',
    postImage:
      'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=720&q=80',
    postLikes: 0,
    postDislikes: 0,
    postDesc: 'This is my friend Steven, he is quite the intellectual.',
  },
  {
    username: 'skinnygrizzly',
    postImage:
      'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
    postLikes: 0,
    postDislikes: 0,
    postDesc: 'Felt cute, come at me.',
  },
  {
    username: 'skinnygrizzly',
    postImage:
      'https://images.unsplash.com/photo-1508609540374-67d1601ba520?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80',
    postLikes: 0,
    postDislikes: 0,
    postDesc: 'Such a good boy.',
  },
  {
    username: 'skinnygrizzly',
    postImage:
      'https://images.unsplash.com/photo-1541368580114-e484e3c75759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
    postLikes: 0,
    postDislikes: 0,
    postDesc: 'Went for nice hike.',
  },
];

const exportData = { sampleUsers: sampleUsers, samplePosts: samplePosts };

module.exports = exportData;
