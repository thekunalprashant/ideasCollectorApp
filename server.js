const express = require("express")
const serverConfig = require("./configs/server.config");

const app = express();

// PORT=3333;

app.listen(serverConfig.PORT, ()=>{
    console.log("Server started!")
})

