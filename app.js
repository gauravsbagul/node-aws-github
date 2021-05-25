const express = require("express");
const app = express();
const cors = require("cors");
// const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

const port =  process.env.PORT || 5000

//ROUTES


app.get("/", async (req, res) => {
  try {
    const {
      mobileNumber,
      userRole
    } = req.body;

    //TODO: call controllers from here and dump data in database

    res.send("Hello world");
  } catch (err) {

  } finally {}
});



app.post("/sendOtp", async (req, res) => {
  try {
    const {
      mobileNumber,
      userRole
    } = req.body;

    //TODO: call controllers from here and dump data in database

    res.json({
      mobileNumber,
      userRole,
      otp: 1234,
      timestamp: new Date(),
    });
  } catch (err) {

  } finally {}
});



app.post("/verifyOtp", async (req, res) => {
  try {
    const {
      mobileNumber,
      otp
    } = req.body;
    console.log('Log: ~> file: index.js ~> line 36 ~> app.get ~> req.body', req.body)


    //TODO: call controllers from here and dump data in database
    //TODO: Check mobile number with database if exists the verify otp and generate jwt token and send it

    if (mobileNumber.length === 10 && otp === 1234) {
      //!IMPORTANT: Dummy token
      //TODO: Add this token against mobile number in users table
      const token = `${mobileNumber}_${new Date().getTime()}_234567`
      res.json({
        token
      });

    } else {
      res.json({
        message: 'Wrong OTP or invalid mobile number'
      });
    }
  } catch (err) {
    console.error(err.message);
  }
});


app.get("/getAllRestaurants", async (req, res) => {
  try {

    res.json({
      data: restaurants = [{
          "id": "C1",
          "name": "xyz cafe",
          "address": "Nasik",
          "menu": [{
              "id": "M1",
              "menuItem": "Tea",
              "price": 10,
              "pointsValue": 1
            },
            {
              "id": "M2",
              "menuItem": "Coffee",
              "price": 30,
              "pointsValue": 1
            }
          ]
        },
        {
          "id": "C2",
          "name": "abc cafe",
          "address": "Pune",
          "menu": [{
              "id": "M4",
              "menuItem": "Tea",
              "price": 10,
              "pointsValue": 1
            },
            {
              "id": "M6",
              "menuItem": "Coffee",
              "price": 30,
              "pointsValue": 1
            }
          ]
        },
      ]
    })
  } catch (err) {
    console.error(err.message);
  }
});

//TODO: Add APIs

app.listen(port, () => {
});
