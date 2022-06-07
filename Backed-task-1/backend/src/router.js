const express = require('express');
const router = express.Router()
const {
    ArticleModel
} = require('./models/Article');

router.get('/', async (req, res) => {
    const articles = await ArticleModel.find();
    console.log('-------------------------------')
    console.log(articles);
    console.log('-------------------------------')
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
        console.log(res)
        return res.status(200).send({
            data
        });
    } catch (error) {
        return res.status(406).send({
            error
        });
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const data = await ArticleModel.findByIdAndDelete(req.params.id)
        console.log('-------------------------------')
        console.log(res.deletedCount);
        console.log('-------------------------------')

        return res.status(200).send({
            data
        })
    } catch (error) {
        return ({
            error
        });
    }
});

router.put('/:id', async (req, res) => {
    try{
        const data = await ArticleModel.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            text: req.body.text
        });
        return res.status(200).send({
            data
        })
    } catch(error) {
        return(error);
    }
});

// edit post 
// PATCH posts/:id  
// payload => { 
//   title: '', 
//   text: '', 
// } 
// response => { 
//   _id: '', 
//   title: '', 
//   text: '', 
// } 


exports.router = router;