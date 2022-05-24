let posts = [{
  id: 1,
  text: 'Hello world',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  comments: [
    'Hello',
    'world',
    '!'
  ]
}, ]
const PORT = process.env.PORT || 3000;
const express = require('express')
const app = express()
const mongoose = require('mongoose');

app.get('/', function (req, res) {
  res.json(posts);
})

// app.use(rout);

// app.listen(3000, function () {
//   console.log(`SERVER RUNNING ON PORT ${PORT}`);
// })
 
async function start() {
  await mongoose.connect('mongodb+srv://Daniel:1q2w3e4r@cluster0.ipjpf.mongodb.net/?retryWrites=true&w=majority',
    err => {
      if (err) throw err;
      console.log('connected to MongoDB')
      mongoose.Promise = global.Promise;
      app.listen(PORT, () => {
        console.log('Server has been started...');
      });
    });
}


start();