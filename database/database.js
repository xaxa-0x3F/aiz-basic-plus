const mongoose = require('mongoose');
const { mongoURI } = require('../config.json');

mongoose.connect(mongoURI, {useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, (err) => {
    if(err) throw err;
    console.log('Mongo Connected');
});