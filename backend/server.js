const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Car = require("./model/cars");
// const Color = require("./model/cars")
const bodyParser = require("body-parser");

// express app
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to mongodb
const dbURI =
  "mongodb+srv://feydo:feyDo1234@node1.00lrnk3.mongodb.net/cars?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    (result) => app.listen(8080),
    console.log("connect success and listening on port 8080")
  )
  .catch((err) => console.log(err));

app.get("/cars", function (req, res) {
  console.log(Car);
  let cars = Car.Car.find({}, function (err, cars) {
    if (err) {
      console.log(err);
    } else {
      res.json(cars);
    }
  });
});

app.get("/colors", function (req, res) {
  let colors = Car.Color.find({}, function (err, colors) {
    if (err) {
      console.log(err);
    } else {
      res.json(colors);
    }
  });
});

app.post("/colors", function (req, res) {
  try {
    const color = new Car.Color(req.body);
    color.save();
    res.send(color);
  } catch (error) {
    res.sendStatus(400);
  }
});

app.post("/cars", async (req, res) => {
  try {
    const car = new Car.Car(req.body);
    car.save();
    res.send(car);
  } catch (error) {
    res.status(400).send(error);
  }
});
