const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");
const markerRoutes = require("./Routes/markerRoutes");
require("dotenv").config({ path: "./.env.example" });


app.use(bodyParser.json());
app.use(cors());
app.use(userRoutes);
app.use(markerRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("Connection Error:", err);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
