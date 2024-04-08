const express = require("express");
const cors = require("cors");
const bcryptjs = require("bcryptjs");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const { User } = require("./database/index");
const { JWT_SECRET } = require("./config");
const { authenticationMiddleware } = require("./middleware/index");

dotenv.config({
  path: ".env",
});

const app = express();

app.use([express.json(), cors()]);

app.get("/user", async function (req, res) {
  try {
    const { email } = req.query;
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "User found",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err,
    });
  }
});

app.post("/user", async function (req, res) {
  try {
    const formData = req.body.formData;
    const hashedPassword = await bcryptjs.hash(formData.password, 16);
    const data = {
      email: formData.email,
      password: hashedPassword,
      plan: {},
    };
    const user = await User.findOne({ email: formData.email });
    if (user) {
      res.status(409).json({
        success: false,
        message: "User already exists",
      });
    } else {
      const newRecord = new User(data);
      await newRecord.save();
      const token = jwt.sign({ email: formData.email }, JWT_SECRET);
      res.status(200).json({
        success: true,
        message: "User created ",
        token: `Bearer ${token}`,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error creating user. Try again!",
    });
  }
});

app.put("/user", authenticationMiddleware, async function (req, res) {
  try {
    const plan = req.body.plan;
    console.log(plan);
    const email = req.body.email;
    await User.updateOne(
      {
        email: email,
      },
      { $set: { plan: plan } }
    );
    res.status(200).json({
      success: true,
      message: "User updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error creating user. Try again!",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on PORT: ${process.env.PORT}`);
});
