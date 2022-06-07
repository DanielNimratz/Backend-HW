const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017');

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})
const ArticleModel = mongoose.model('Article', schema);

exports.ArticleModel = ArticleModel;