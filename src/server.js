const fetch = require("node-fetch");
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(cors());

app.post("/api", async (req, res) => {
  const location = req.body.location;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`
  );
  const data = await response.json();

  res.send(data);
});
app.listen(5000, () => {
  console.log("listening on port 5000");
});
