
require("dotenv").config();
const express = require("express")
const app = express();
const http = require("http")
const cors = require('cors')
const bodyParser = require("body-parser")
const { PORT }  = process.env;
const sequelize = require("./parakshDB/database");
const db = require("./models");
const authRoute = require("./routes/authRoutes")
const parakshRoute = require("./routes/parakshtechRoute")
const contactus = require("./routes/contactUs")


sequelize.sync();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001","http://192.168.29.21:3000","http://192.168.29.21:3001"],
    credentials: true,
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/uploads", express.static("uploads"));

// ---------------------------------ROUTES------------------------
app.use("/api/v1",authRoute)
app.use("/api/v1",parakshRoute)
app.use("/api/v1",contactus)



// --------------------SERVER LISNER----------------------------

    http.createServer(app).listen(PORT,(req,res)=>{
        console.log("Server is working on " + PORT);
        
    })

