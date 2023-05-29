const { format } = require("date-fns");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

// console.log(
// const randomID = uuid();
//   `The time and date, is currently ${dates}`,
//   `This is a random ID ${randomID}`
// );

const logEvents = async (message, logFile) => {
  const dates = format(new Date(), "PPpp");
  const logItems = `${dates}\t${message}`;
  console.log(path.join(__dirname, "logs"));

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    } else {
      await fsPromises.appendFile(
        path.join(__dirname, "logs", logFile),
        `${logItems}\n`
      );
      console.log(logItems);
    }
  } catch (err) {
    console.error(err);
  }
};

const httpLogger = (req, res, next) => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, "req.log");
  console.log(req.method, req.url, req.path);
  next();
};

const errorLogger = (err, req, res, next) => {
  logEvents(`${err.name}\t${err.message}`, "err.log");
  console.error(err.stack);
  res.status(500).send({
    status: "failed",
    message: err.message,
  });
  next(err);
};

// module.exports = (err, req, res, next) => {
//   winston.error(err.message, err);
//   res.status(500).send({
//     status: "failed",
//     message: err.message,
//   });
//   next(err);
// };

// app.use((err, req, res, next) => {
//   const errStatusCode = err.statusCode || 500;

//   logEvents(`${err.name}\t${err.message}`, "errLog.txt");
//   console.error(err.stack);
//   res.status(errStatusCode).send(err.message);
//   next();
// });

module.exports = { httpLogger, errorLogger, logEvents };
