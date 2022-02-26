const express = require("express");
const setupMiddlewares = require("./utils/middlewares");
const app = express();

const port = 3000 || process.env.PORT;
var server_host = 'localhost' || '0.0.0.0';

setupMiddlewares(express, app);

const homeRouter = require("./routes/home");
const reviewsRouter = require("./routes/reviews");
app.use("/", homeRouter);
app.use("/", reviewsRouter);

app.listen(port,server_host, () => {
  console.log(`The application is running on the port ${port}`);
});
