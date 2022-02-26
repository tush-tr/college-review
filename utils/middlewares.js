// EXPRESS SPECIFIC STUFF

const setupMiddlewares = (express,app) => {
  const path = require("path");
  const bodyParser = require("body-parser");
  app.use("/static", express.static("static")); // For serving static files

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.urlencoded());

  app.set("view engine", "jsx"); // set the view engine as jsx
  app.set("views", path.join(__dirname, "../views")); // set the views directory
  app.engine("jsx", require("express-react-views").createEngine());
};

module.exports = setupMiddlewares;
