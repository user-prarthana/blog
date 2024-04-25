const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
PORT =3010
require("./DB/connection")
const userRoute = require('./Routes/userRoute');
const postRoute =  require('./Routes/postRoute');
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use('/api',userRoute)
app.use('/api',postRoute)


app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
}) 