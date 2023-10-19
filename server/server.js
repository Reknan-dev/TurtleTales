require("dotenv").config({ path: "./.env.example" });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const userRoutes = require("./Routes/userRoutes");
const markerRoutes = require("./Routes/markerRoutes");


app.use(bodyParser.json());
const corsOptions = {
  origin: 'https://turtle-tales.vercel.app',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
  allowedHeaders: ["Content-Type", "Authorization"]
};

app.use(cors({
  origin: 'https://turtle-tales.vercel.app',
  optionsSuccessStatus: 200
}));
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
