const express = require("express"),
routes = require("./routes/routes"),
cors = require("cors"),
app = express()

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

/*
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*") //All acess for any web-site
    app.use(cors())
    next()
})
*/

app.use(routes)
require("dotenv").config()

require("./database")

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`Server running on host http:localhost:${port}`))