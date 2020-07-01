const express = require('express');
const router = express.Router({mergeParams: true});

router.get('/', (req, res, next) => {
    res.send('reviews')
});

router.post('/', (req, res, next) => {
    res.send(' create')
});
router.get('/:review_id', (req, res, next) => {
    res.send('get by id')
});

router.post('/:review_id/edit', (req, res, next) => {
    res.send('edit')
});
router.put('/:review_id', (req, res, next) => {
    res.send('update')
});
router.delete('/:review_id', (req, res, next) => {
    res.send('delete')
});



module.exports = router;
