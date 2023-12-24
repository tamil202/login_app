const express = require('express');
const app = express();
const morgan = require('morgan');   //  http request handlers
const cors = require('cors');      // Resoure sharing
require('dotenv').config();
const Port = 3000 || process.env.PORT; 
const {dbsconnect} = require('./database/config')

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by')   // security based

app.get('/', (req, res) => {
    res.status(201).json('Home get method')
})

// api middleware
app.use(require('./router/route'))

// database
dbsconnect().then(() => {
    try {
        app.listen(Port, () => {
            console.log(`server start from localhost:${Port}`);
        })
    } catch (e) {
        console.log(`error:${e}`);
    }
}).catch ((error) => {
    console.log(`error : ${error}`);
})






