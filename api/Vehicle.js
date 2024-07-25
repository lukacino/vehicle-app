const mongoose = require("mongoose");
const { Schema } = mongoose;

const VehicleSchema = new Schema({
  make: String,
  mileage: Number,
  serviceDates: [Number],
  owner: {
    name: String,
    email: String,
  },
  image: String,
});

const VehicleModel = mongoose.model("Vehicle", VehicleSchema);

module.exports = VehicleModel;
