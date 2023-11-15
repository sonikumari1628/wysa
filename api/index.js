
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import questRoute from "./routes/questionRoute.js";
import authRoute from "./routes/authRoute.js";
// import { Path } from 'mongoose';
import path from 'path';

const app = express();

dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
    } catch (error){
        throw error;
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("MongoDB disconnected!");
});

//Middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/api/quest", questRoute);
app.use("/api/auth", authRoute);

const __dirname1 = path.resolve();
// console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === "production") {
  console.log("in production");
  app.use(express.static(path.join(__dirname1, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is Running..");
  });
}

app.listen(3000, () => {
    connect();
    console.log("Connected to backend.");
});