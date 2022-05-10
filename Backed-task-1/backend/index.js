let posts = [
    {
      id: 1, 
      text: 'Hello world', 
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      comments: [
        'Hello',
        'world',
        '!'
      ]
    },
]

const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json(posts);
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})