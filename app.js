const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/router");

// CORS setting for FCC remote testing
app.use(cors({optionsSuccessStatus: 200}));

// Middleware
app.use(express.static("./public"));

// Routes
app.use("/api", router);
app.get("/", (req, res) => {
  res.status(200);
});
app.get("*", (req, res) => {
  res.status(404).send("No resource found :(");
});

app.listen(3000, console.log("Server listening on port 3000..."));
