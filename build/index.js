"use strict";

var _container = require("./app/API-v1/container");

const application = _container.container.resolve("app");

const db = _container.container.resolve("db");

application.start().then(async () => {
  await db.sequelize.sync();
}).catch(err => {
  console.log(err);
  process.exit();
});