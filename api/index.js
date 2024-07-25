const express = require("express");
const { json } = express;
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const VehicleModel = require("./Vehicle");

const app = express();
app.use(cors());
app.use(json());

dotenv.config({ path: "../config.env" });

mongoose.connect(process.env.DB_URL).then(() => console.log("Db connected"));

app.post("/api/create", async (req, res) => {
  const create = await VehicleModel.create(req.body.vehicle);
  res.send(create);
});

app.get("/api/get", async (req, res) => {
  const get = await VehicleModel.find();
  res.send(get);
});
app.listen(3000, () => {
  console.log("Listening on 3000");
});
