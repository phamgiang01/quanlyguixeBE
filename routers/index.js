const userRouter = require("./user.router");
const transRouter = require("./transport.router");
const billRouter = require("./bill.router");
const statisticalRouter = require("./statistical.router");
const parameterRouter = require("./parameter.router");
const errorHandle = require("../middlewares/errorHandle");
module.exports = (app) => {
  app.use("/api/user", userRouter);
  app.use("/api/transport", transRouter);
  app.use("/api/statistical", statisticalRouter);
  app.use("/api/bill", billRouter);
  app.use("/api/parameter", parameterRouter);
  app.use(errorHandle);
};
