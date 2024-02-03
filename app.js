// "use strict";
// const express = require("express");
// const path = require("path");
// const cookieParser = require("cookie-parser");
// const cookieSession = require("cookie-session");
// const cors = require("cors");
// require("dotenv").config();
// const Services = {
//     log: require("./services/logger.service"),
//     db: require("./services/database.service"),
//     auth: require("./services/auth.service"),
//     env: require("./services/env.service")
// };

// const envLoadResult = Services.env.load(path.join(__dirname, "./.env"));
// if (envLoadResult.error) {
//     Services.log.warn(envLoadResult.error);
// }

// const passport = require("passport");
// passport.use("emailAndPass", Services.auth.emailAndPassStrategy);

// /* Routes here */
// const indexRouter = require("./routes/index");
// const accountRouter = require("./routes/api/account");
// const authRouter = require("./routes/api/auth");
// const hackerRouter = require("./routes/api/hacker");
// const teamRouter = require("./routes/api/team");
// const travelRouter = require("./routes/api/travel");
// const sponsorRouter = require("./routes/api/sponsor");
// const searchRouter = require("./routes/api/search");
// const settingsRouter = require("./routes/api/settings");
// const volunteerRouter = require("./routes/api/volunteer");
// const roleRouter = require("./routes/api/role");

// const app = express();
// Services.db.connect(app);

// let corsOptions = {};

// if (!Services.env.isProduction()) {
//     corsOptions = {
//         origin: ["*"],
//         credentials: true
//     };
// } else {
//     // TODO: change this when necessary
//     corsOptions = {
//         origin: ["*"],
//         credentials: true
//     };
// }
// /////////
// app.use(cors(corsOptions));
// // app.use(cors());
// app.use(Services.log.requestLogger);
// app.use(Services.log.errorLogger);
// app.use(express.json());
// app.use(
//     express.urlencoded({
//         extended: false
//     })
// );
// app.use(cookieParser());
// //Cookie-based session tracking
// app.use(
//     cookieSession({
//         name: "session",
//         keys: [process.env.COOKIE_SECRET],
//         // Cookie Options
//         maxAge: 48 * 60 * 60 * 1000, //Logged in for 48 hours
//         sameSite: process.env.COOKIE_SAME_SITE,
//         secureProxy: true
//     })
// );
// app.use(passport.initialize());
// app.use(passport.session()); //persistent login session

// app.use(express.static(path.join(__dirname, "public")));

// var apiRouter = express.Router();

// accountRouter.activate(apiRouter);
// Services.log.info("Account router activated");
// authRouter.activate(apiRouter);
// Services.log.info("Auth router activated");
// hackerRouter.activate(apiRouter);
// Services.log.info("Hacker router activated");
// teamRouter.activate(apiRouter);
// Services.log.info("Team router activated");
// travelRouter.activate(apiRouter);
// Services.log.info("Travel router activated");
// sponsorRouter.activate(apiRouter);
// Services.log.info("Sponsor router activated");
// volunteerRouter.activate(apiRouter);
// Services.log.info("Volunteer router activated");
// searchRouter.activate(apiRouter);
// Services.log.info("Search router activated");
// settingsRouter.activate(apiRouter);
// Services.log.info("Settings router activated");
// roleRouter.activate(apiRouter);
// Services.log.info("Role router activated");

// apiRouter.use("/", indexRouter);
// app.use("/", indexRouter);

// app.use("/api", apiRouter);

// //Custom error handler
// app.use((err, req, res, next) => {
//     // log the error...
//     const status = err.status ? err.status : 500;
//     const message = err.message ? err.message : "Internal Server Error";
//     //Only show bad error when we're not in deployment
//     let errorContents;
//     if (status === 500 && Services.env.isProduction) {
//         errorContents = {};
//     } else if (err.error) {
//         errorContents = err.error;
//     } else if (err.data) {
//         errorContents = err.data;
//     } else {
//         errorContents = err;
//     }
//     res.status(status).json({
//         message: message,
//         data: errorContents
//     });
// });

// module.exports = {
//     app: app
// };

"use strict";
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const cors = require("cors");
require("dotenv").config();
const Services = {
    log: require("./services/logger.service"),
    db: require("./services/database.service"),
    auth: require("./services/auth.service"),
    env: require("./services/env.service")
};

const envLoadResult = Services.env.load(path.join(__dirname, "./.env"));
if (envLoadResult.error) {
    Services.log.warn(envLoadResult.error);
}

const passport = require("passport");
passport.use("emailAndPass", Services.auth.emailAndPassStrategy);

/* Routes here */
const indexRouter = require("./routes/index");
const accountRouter = require("./routes/api/account");
const authRouter = require("./routes/api/auth");
const hackerRouter = require("./routes/api/hacker");
const teamRouter = require("./routes/api/team");
const travelRouter = require("./routes/api/travel");
const sponsorRouter = require("./routes/api/sponsor");
const searchRouter = require("./routes/api/search");
const settingsRouter = require("./routes/api/settings");
const volunteerRouter = require("./routes/api/volunteer");
const roleRouter = require("./routes/api/role");

const app = express();
Services.db.connect(app);

// const corsOpts = {
//     origin: "*",

//     methods: ["GET", "DELETE", "PUT", "POST"],

//     allowedHeaders: ["Content-Type"]
// };

// app.use(cors(corsOpts));

// Allow CORS for all origins
///
// app.use(
//     cors({
//         origin: "http://localhost:1337",
//         credentials: true // This is important for handling credentials in your requests
//     })
// );
app.use(
    cors({
        // origin: "http://localhost:1338",
        origin: "https://hackathon-registration-final-xliy.vercel.app",

        credentials: true // This is important for handling credentials in your requests
    })
);
app.use(Services.log.requestLogger);
app.use(Services.log.errorLogger);
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(cookieParser());

// Cookie-based session tracking
app.use(
    cookieSession({
        name: "session",
        keys: [process.env.COOKIE_SECRET],
        maxAge: 48 * 60 * 60 * 1000, // Logged in for 48 hours
        sameSite: process.env.COOKIE_SAME_SITE,
        secureProxy: true
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "public")));

var apiRouter = express.Router();

accountRouter.activate(apiRouter);
Services.log.info("Account router activated");
authRouter.activate(apiRouter);
Services.log.info("Auth router activated");
hackerRouter.activate(apiRouter);
Services.log.info("Hacker router activated");
teamRouter.activate(apiRouter);
Services.log.info("Team router activated");
travelRouter.activate(apiRouter);
Services.log.info("Travel router activated");
sponsorRouter.activate(apiRouter);
Services.log.info("Sponsor router activated");
volunteerRouter.activate(apiRouter);
Services.log.info("Volunteer router activated");
searchRouter.activate(apiRouter);
Services.log.info("Search router activated");
settingsRouter.activate(apiRouter);
Services.log.info("Settings router activated");
roleRouter.activate(apiRouter);
Services.log.info("Role router activated");

apiRouter.use("/", indexRouter);
app.use("/", indexRouter);

app.use("/api", apiRouter);

// Custom error handler
app.use((err, req, res, next) => {
    const status = err.status ? err.status : 500;
    const message = err.message ? err.message : "Internal Server Error";
    let errorContents;
    if (status === 500 && Services.env.isProduction) {
        errorContents = {};
    } else if (err.error) {
        errorContents = err.error;
    } else if (err.data) {
        errorContents = err.data;
    } else {
        errorContents = err;
    }
    res.status(status).json({
        message: message,
        data: errorContents
    });
});

module.exports = {
    app: app
};
