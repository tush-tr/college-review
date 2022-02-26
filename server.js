const express = require("express");
const setupMiddlewares = require("./utils/middlewares");
const app = express();

const port = 3000 | process.env.PORT;

setupMiddlewares(express, app);

const homeRouter = require("./routes/home");
const reviewsRouter = require("./routes/reviews");
app.use("/", homeRouter);
app.use("/", reviewsRouter);

app.listen(port, () => {
  console.log(`The application is running on the port ${port}`);
});
