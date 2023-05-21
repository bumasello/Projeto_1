import express from "express";
import winston from "winston";
import cicomRouter from "./route/cicom.router.js";

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level} ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "API_CICOM_LOG.txt" }),
  ],
  format: combine(label({ label: "API_CICOM" }), timestamp(), myFormat),
});

const app = express();

app.use(express.json());

app.use("/cicom", cicomRouter);

app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

app.listen(3000, () => console.log("API Started!"));
