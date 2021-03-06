const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { notFound , errorHandler } = require('./middlewares/defaultErrorMiddlewares');
const dbConnection = require('./db/dbconnect');
const studentHandler = require('./routes/student');



const app = express();


//db connection
dbConnection();

//external middlewares
app.use(cors());
dotenv.config();

//Internal middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.use('/api/v1', studentHandler);


app.get('/', (req, res) => {
    res.send('server is online');
});

//bad request
app.get('*', (req, res) => {
    res.status(404).json({
        message: 'Page not found'
    });
});

//error handling
app.use(notFound);
app.use(errorHandler);


// listing to the server
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});