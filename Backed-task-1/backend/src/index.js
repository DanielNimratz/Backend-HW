const { app } = require('./app');

app.listen(5000, () => {
  console.log('Server has started!');
});


// async function start() {
//   await mongoose.connect(uri,
//     err => {  
//       if (err) throw err;
//       console.log('connected to MongoDB')
//       mongoose.Promise = global.Promise;
//       
//     });
// }
// 
// 'mongodb+srv://Daniel:1q2w3e4r@cluster0.ipjpf.mosngodb.net/?retryWrites=true&w=majority'



// async function start() {
//   const uri = 'mongodb://localhost:27017';
//   const client = new MongoClient(uri);
//   try {
//     await client.connect();
//     console.log('connected to DB')

//     // await postArticle(client, {
//     // title: 'Hello world number 3',
//     // text: "Lorem ipsum dolor sit amet number 3",
//     // })

//     await getEveryArticle(client);

//     // await getArticleById(client, ObjectId("62907f357594df3eddb54ad6"));

//     // await editArticle(client, "62907f357594df3eddb54ad6", {text: "Lorem ipsum dolor sit amet"})

//     // await deleteArticleById(client, '6290b78e9488eb34f91ea6ed')

//   } catch (e) {
//     console.log(e);
//   } finally {
//     await client.close();
//   }
// }

// start().catch(console.error);

// async function postArticle(client, newArticle) {
//   const result = await client.db("HW-backend-1").collection("Articles").insertOne(newArticle);
//   const postedArticle = await getArticleById(client, result.insertedId)
//   console.log(`New article was created:${JSON.stringify(postedArticle, null, 2)}`);
//   return JSON.stringify(postedArticle, null, 2);
// }

// async function editArticle(client, articleId, changes) {
//   console.log('Article edited:')
//   await client.db("HW-backend-1").collection("Articles").updateOne({
//     _id: ObjectId(articleId)
//   }, {
//     $set: changes
//   });
//   await getArticleById(client, articleId);
// }

// async function getArticleById(client, id) {
//   const result = await client.db("HW-backend-1").collection("Articles").findOne({
//     _id: ObjectId(id)
//   });
//   if (result) {
//     console.log('We have found article with such id:')
//     console.log(result);
//   } else {
//     console.log('Article with such id was not found')
//   }
// }

// //delete
// async function deleteArticleById(client, articleId) {
//   const result = await client.db("HW-backend-1").collection("Articles").deleteOne({
//     _id: ObjectId(articleId)
//   });
//   console.log(`${result.deletedCount} articles were deleted`);
// }


// async function getEveryArticle(client) {
//   const result = await client.db("HW-backend-1").collection("Articles").find({}).toArray();
//   console.log(result);
// }









// POST posts/ 
// create post 
// payload =>  { 
//   title: '', 
//   text: '', 
// } 
// response => { 
//   _id: '', 
//   title: '', 
//   text: '', 
// } 



// get post by id 
// GET posts/:id 
// response => { 
//   _id: '', 
//   title: '', 
//   text: '', 
// } 

// delete post 
// DELETE posts/:id 
// response => { count: 1 } 


// get posts 
// GET posts/ 
// response => [ 
//   { 
//     _id: '', 
//     title: '', 
//     text: '', 
//     category: '', 
//   }, 
//   { 
//     _id: '', 
//     title: '', 
//     text: '', 
//     category: '', 
//   }, 
//   { 
//     _id: '', 
//     title: '', 
//     text: '', 
//     category: '', 
//   }, 
// ];