"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.container = void 0;

var _awilix = require("awilix");

var _server = require("./server");

var _startup = require("./startup");

var _environments = require("../../config/environments");

var _models = require("../../dal/models");

var _routes = require("./routes");

var _index = require("./routes/index.routes");

var _controllers = require("./controllers");

var _services = require("./services");

var _repositories = require("../../dal/repositories");

/* Config */

/* db */

/* Routes */

/* Controllers */

/* Services */

/* Repositories */
const container = (0, _awilix.createContainer)();
exports.container = container;
container.register({
  app: (0, _awilix.asClass)(_startup.StartUp).singleton(),
  server: (0, _awilix.asClass)(_server.Server).singleton(),
  router: (0, _awilix.asFunction)(_routes.Routes).singleton(),
  config: (0, _awilix.asValue)(_environments.currentEnv)
}).register({
  db: (0, _awilix.asValue)(_models.db)
}).register({
  AuthRoutes: (0, _awilix.asFunction)(_index.AuthRoutes).singleton(),
  ProjectRoutes: (0, _awilix.asFunction)(_index.ProjectRoutes).singleton(),
  UserHistoryRoutes: (0, _awilix.asFunction)(_index.UserHistoryRoutes).singleton(),
  TicketRoutes: (0, _awilix.asFunction)(_index.TicketRoutes).singleton(),
  EnterpriseRoutes: (0, _awilix.asFunction)(_index.EnterpriseRoutes).singleton()
}).register({
  AuthController: (0, _awilix.asClass)(_controllers.AuthController).singleton(),
  ProjectController: (0, _awilix.asClass)(_controllers.ProjectController).singleton(),
  UserHistoryController: (0, _awilix.asClass)(_controllers.UserHistoryController).singleton(),
  TicketController: (0, _awilix.asClass)(_controllers.TicketController).singleton(),
  EnterpriseController: (0, _awilix.asClass)(_controllers.EnterpriseController).singleton()
}).register({
  AuthService: (0, _awilix.asClass)(_services.AuthService).singleton(),
  ProjectService: (0, _awilix.asClass)(_services.ProjectService).singleton(),
  UserHistoryService: (0, _awilix.asClass)(_services.UserHistoryService).singleton(),
  TicketService: (0, _awilix.asClass)(_services.TicketService).singleton(),
  EnterpriseService: (0, _awilix.asClass)(_services.EnterpriseService).singleton(),
  UserService: (0, _awilix.asClass)(_services.UserService).singleton()
}).register({
  UserRepository: (0, _awilix.asClass)(_repositories.UserRepository).singleton(),
  ProjectRepository: (0, _awilix.asClass)(_repositories.ProjectRepository).singleton(),
  UserHistoryRepository: (0, _awilix.asClass)(_repositories.UserHistoryRepository).singleton(),
  TicketRepository: (0, _awilix.asClass)(_repositories.TicketRepository).singleton(),
  EnterpriseRepository: (0, _awilix.asClass)(_repositories.EnterpriseRepository).singleton()
});