const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('posts')
});

router.get('/new', (req, res, next) => {
    res.send('posts/new')
});

router.post('/', (req, res, next) => {
    res.send(' create')
});
router.get('/:id', (req, res, next) => {
    res.send('get by id')
});

router.post('/:id/edit', (req, res, next) => {
    res.send('edit')
});
router.put('/:id', (req, res, next) => {
    res.send('update')
});
router.delete('/:id', (req, res, next) => {
    res.send('delete')
});



module.exports = router;
