require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')
const port = process.env.PORT;
app.listen(process.env.PORT || port, () =>
  console.log("listening to port 5000")
);

mongoose.connect(
  process.env.MONGO_URL,
  {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
  },
).then(() => console.log("database connected")).catch((e) => console.log(e))

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
 require('../backend/routes/users/createUser')

app.use("/", require('../backend/routes/users/createUser'));
app.use("/login", require('../backend/routes/authentication/login'));
