const express = require('express');
const router = express.Router();

const cookieParser = require('cookie-parser'); 

// Models
const Movie = require('../models/Movie');

// Middlewares
router.use(cookieParser());//for req.cookies...

router.get('/movies.list', async (req, res) => {
    try {
        console.log('MOVIES LIST: query=', req.query);
        
        const skip = parseInt(req.query.skip) || 0;
        const limit = parseInt(req.query.limit) || 10;

        const sortField = req.query.sortBy || 'title'
        const sortType = parseInt(req.query.sortField) || 1

        const sort = {};

        sort[sortField] = sortType;

        const movies = await Movie.find()
        .skip(skip)
        .limit(limit)
        .sort(sort)
        .exec();

        res.send({success: true, movies});
        
    } catch (error) {
        res.send({success: false, errorId: error.message});
    }
})

module.exports = router;