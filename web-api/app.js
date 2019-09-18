const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sendGrid = require("@sendGrid/mail");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/api", (req, res, next) => {
  res.send("API Status: Running");
});

app.post("/api/email", (req, res, next) => {
  sendGrid.setApiKey(
    "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"
  );
  const msg = {
    to: "wangtangni96@gmail.com",
    from: req.body.email,
    subject: "Personal Website Contact",
    text: req.body.message
  };

  sendGrid
    .send(msg)
    .then(result => {
      res.status(200).json({
        success: true
      });
    })
    .catch(err => {
      console.log("error: ", err);
      res.status(401).json({
        success: false
      });
    });
});
app.listen(3030, "0.0.0.0");
