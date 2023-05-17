var express = require("express");
var cors = require("cors");
var app = express();
var cookieParser = require("cookie-parser");

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

app.use(cookieParser());

app.post("api/auth/login", (req, res) => {
  res
    .cookie("kenneth", "is awesome", {
      sameSite: "none",
      httpOnly: true,
      secure: true,
    })
    .send("ok");
});

app.get("/me", function (req, res, next) {
  console.log("Cookies: ", req.cookies);
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

const port = process.env.PORT || "8080";
app.listen(port, function () {
  console.log(`CORS-enabled web server listening on port ${port}`);
});
