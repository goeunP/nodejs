const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./models/User");
const bodyParser = require("body-parser");
const config = require("./config/key");

const app = express();
const port = 5005;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>first node</title>
  </head>
  <body>
    <h1>hello world</h1>
    <input type="text" />
    <button>submit</button>
  </body>
</html>
`;

mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected!!!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send(html));

app.post("/api/user/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
