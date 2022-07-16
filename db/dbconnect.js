const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const dbConnection = async() => {
        try{
            await mongoose.connect('mongodb+srv://mehrabriyan:Cr6J4QfXRe3rBPn@cluster0.f6ym0.mongodb.net/softnerve-student?retryWrites=true&w=majority')
            console.log('connected to db');
        }
        catch(err){
            console.log(err.message);
        }
}

module.exports = dbConnection;