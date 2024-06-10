import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/issues", require("./api/issue"));

mongoose.connect("mongodb://127.0.0.1/test");
mongoose.connection.once("open", () => {
  app.emit("ready");
});

app.on("ready", () => {
  app.listen(process.env.PORT || 3001, () => {
    console.log(`Listening to port ${process.env.PORT || 3001}`);
  });
});
