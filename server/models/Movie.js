const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    title: {
            type: String,
            required: true
        },
    genres: [
        {
            type: String,
            required: true
        }
    ],
    actors: [
        {
            type: String,
            required: true
        }
    ],
    label : {
        type: String
    },
    releaseDate: {
        type: Date
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;