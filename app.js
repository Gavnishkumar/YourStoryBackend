const express = require("express");
const dotenv = require("dotenv");
const UserRoute = require("./Route/UserRoute");
const connectDB = require("./Config/db");
dotenv.config();
PORT = process.env.PORT;

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.use("/api/user", UserRoute);
app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
});
