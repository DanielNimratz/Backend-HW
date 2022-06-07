const express = require('express');
const router = express.Router()
const {
    ArticleModel
} = require('./models/Article');

router.get('/', async (req, res) => {
    const articles = await ArticleModel.find();
    console.log(articles);
    return res.status(200).send({
        articles
    });
});

router.get('/:id', async (req, res) => {
    console.log('params => ', req.params);

    try {
        const data = await ArticleModel.findById(req.params.id);
        return res.status(200).send({
            data
        });
    } catch (error) {
        return res.status(404).send({
            message: 'Not found'
        });
    }
});

router.post('/', async (req, res) => {
    try {
        const data = await ArticleModel.create(req.body);
        return res.status(200).send({ data });
    } catch (error) {
        return res.status(406).send({ error });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const data = await ArticleModel.findByIdAndDelete(req.params.id)
        // console.log(data);
        return res.status(200).send({ res })
    } catch (error) {
        return ({ error });
    } 
});
// res.deletedCount
// delete post 
// DELETE posts/:id 
// response => { count: 1 } 

exports.router = router;