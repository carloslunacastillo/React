const mongoose = require('mongoose');

//const URI = 'mongodb://localhost/mern-task';
const URI = 'mongodb://carlos:leo123@ds129260.mlab.com:29260/registro';


mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

    module.exports = mongoose;