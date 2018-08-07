const mongoose = require('mongoose');

mongoose.connect('mongodb://testdb1:testdb1@ds213612.mlab.com:13612/deptfaculty', { useNewUrlParser: true }, (err, res) =>{
    if(!err)
        console.log('MongoDB connection succeded...');
    else
        console.log('Error in DB connection :' + JSON.stringify(err, undefined, 2));
    /**if (err) throw err;
        console.log('Database online');**/
});

module.exports = mongoose;
