// const express = require("express");
import express from "express";
import router from "./routes/router.js";
// const { default: mongoose } = require("mongoose");
import mongoose from "mongoose";
import Card from "./routes/card.js";
const app = express();
const port = 3001;
const DB_URL = "mongodb://127.0.0.1:27017/";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", router);
// app.use("/users", router);

async function startApp() {
  try {
    mongoose.connect(DB_URL);
    app.listen(port, () => {
      console.log(`Приложение слушает порт ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
}
startApp();

// app.get("/", (req, res) => {
//     console.log(req.query, 'GET запрос: параметры в строке запроса');
//     res.status(200).json(req.query);cc
// });
