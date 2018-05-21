const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const Services = {
    log: require("./services/logger.service"),
    db: require("./services/database.service"),
    emailAndPassStrategy: require("./services/auth.service.js")
};

const passport = require("passport");
passport.use("emailAndPass", Services.emailAndPassStrategy);

/* Routes here */
const indexRouter = require("./routes/index");
const accountRouter = require("./routes/api/account");

const app = express();
Services.db.connect(app);

const result = require("dotenv").config({
    path: path.join(__dirname, "./.env")
});

if (result.error) {
    Services.log.error(result.error);
}



app.use(Services.log.requestLogger);
app.use(Services.log.errorLogger);
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session()); //persistent login session

app.use(express.static(path.join(__dirname, "public")));

var apiRouter = express.Router();
console.log("activating accountRouter");
accountRouter.activate(apiRouter);
app.use("/api", apiRouter);


app.use("/", indexRouter);

module.exports = app;