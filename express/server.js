const path = require("path");
const express = require("express");
const serverless = require("serverless-http");
const hbs = require("express-handlebars");
const regRoute = require("../routes/reg");
const authRoute = require("../routes/auth");
const chatRoute = require("../routes/chat");
const profileRoute = require("../routes/profile");

const app = express();

app.set("views", path.join(__dirname, "../views/"));
app.engine(
  "hbs",
  hbs({
    layoutsDir: "views/layouts",
    defaultLayout: "main",
    extname: "hbs",
    helpers: {
      button: require("../helpers/button"),
      section: require("../helpers/section"),
      when: require("../helpers/when"),
    },
  })
);
app.set("view engine", "hbs");

app.use(express.static("./"));
app.get("/main", chatRoute);
app.get("/chat/:id", chatRoute);
app.get("/reg", regRoute);
app.get("/auth", authRoute);
app.get("/profile", profileRoute);

app.use(express.static(path.join(__dirname, "../public")));

app.use(function (req, res, next) {
  res.render("error", { ecode: 404, message: "Такой страницы нет" });
});

app.use(function (err, req, res, next) {
  res.render("error", {
    ecode: err.status || 500,
    message: "Мы уже чиним",
  });
});

module.exports = app;
module.exports.handler = serverless(app);
