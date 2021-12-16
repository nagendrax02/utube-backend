const { config } = require("dotenv");
const express = require("express");
const dbConnection = require("./configs/dbConnection")
const AuthRoutes = require("./routes/auth.route")
const VideoRoutes = require("./routes/video.routes");
require("dotenv").config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 2000;

//=============================================Server Endpoints================================
 app.use(AuthRoutes);
 app.use(VideoRoutes)
//===================================================================================

app.listen(PORT, async()=>{
    await dbConnection();
    console.log(`listening to port ${PORT}`)
})