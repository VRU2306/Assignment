/* Mongodb database connection is done here*/ 
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vrujesh_23:Vruje23@clusternew.phqfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true}  , (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

module.exports=mongoose;