const express = require("express");
const Owner = require("./models/owner");
const Consumer = require("./models/consumer");
const cors = require("cors");
const app = express();
require("./db/connect");

const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser());

const port = 3001;
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { loggedin: false, name: "" });
});

app.get("/retreive-owner", async (req, res) => {
  Owner.find({}, function (err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/register-owner", async (req, res) => {
  try {
    const user = new Owner({
      fname: req.body.firstName,
      lname: req.body.lastName,
      username: req.body.userName,
      email: req.body.email,
      address1: req.body.address1,
      address2: req.body.address2,
      password: req.body.password,
      cpassword: req.body.confirmPassword,
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      phone: req.body.phone,
    });

    const result = await user.save();
    res.send(JSON.stringify({ success: true }));
  } catch (err) {
    console.log(err);
    res.send(JSON.stringify({ success: false }));
  }
});

app.post("/register-customer", async (req, res) => {
  try {
    const user = new Consumer({
      fname: req.body.firstName,
      lname: req.body.lastName,
      username: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      cpassword: req.body.confirmPassword,
      phone: req.body.phone,
    });

    const result = await user.save();
    res.send(JSON.stringify({ success: true }));
  } catch (err) {
    console.log(err);
    res.send(JSON.stringify({ success: false }));
  }
});

app.post("/login-owner", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    console.log("body", req.body);
    // console.log(`username: ${username}, password: ${password}`);
    const loginData = await Owner.findOne({ username: username });
    console.log(loginData);
    const isMatch = await bcrypt.compare(password, loginData.password);

    const token = await loginData.generateAuthToken();
    res.cookie("loginjwt", token, {
      // expires:new Date(Date.now() + 50000),
      httpOnly: true,
    });
    console.log(isMatch);
    if (isMatch) {
      const responseData = {
        success: true,
        firstName: loginData.fname,
        lastName: loginData.lname,
        userName: loginData.username,
        email: loginData.email,
        address: `${loginData.address1} ${loginData.address2}, ${loginData.city}, ${loginData.state}`,
        phone: loginData.phone,
      };
      res.send(JSON.stringify(responseData));
    } else {
      res.send(JSON.stringify({ success: false }));
    }
  } catch (err) {
    res.send(JSON.stringify({ success: false }));
  }
});

app.post("/login-customer", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const loginData = await Consumer.findOne({ username: username });
    console.log(loginData);
    const isMatch = await bcrypt.compare(password, loginData.password);

    const token = await loginData.generateAuthToken();
    res.cookie("loginjwt", token, {
      expires: new Date(Date.now() + 50000),
      httpOnly: true,
    });
    console.log(isMatch);
    if (isMatch) {
      const responseData = {
        success: true,
        firstName: loginData.fname,
        lastName: loginData.lname,
        userName: loginData.username,
      };
      res.send(JSON.stringify(responseData));
    } else {
      res.send(JSON.stringify({ success: false }));
    }
  } catch (err) {
    res.send(JSON.stringify({ success: false }));
  }
});

// app.get("/logout", (req, res) => {
//   try {
//     //res.clearCookie("loginjwt");
//     //res.cookie.set('loginjwt', {expires: Date.now()});

//     //console.log("Logout successful");
//     //await req.user.save();
//     res.render("index", { loggedin: false, name: "" });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
