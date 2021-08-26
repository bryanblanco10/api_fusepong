import { asClass, asFunction, createContainer, asValue } from "awilix";

import { Server } from "./server";
import { StartUp } from "./startup";

/* Config */
import { currentEnv } from "../../config/environments";

/* db */
import { db } from "../../dal/models";

/* Routes */
import { Routes } from "./routes";
import {
  AuthRoutes,
  ProjectRoutes,
  UserHistoryRoutes,
  TicketRoutes,
  EnterpriseRoutes
} from "./routes/index.routes";

/* Controllers */
import {
  AuthController,
  ProjectController,
  UserHistoryController,
  TicketController,
  EnterpriseController
} from "./controllers";

/* Services */
import {
  AuthService,
  ProjectService,
  UserHistoryService,
  TicketService,
  EnterpriseService,
  UserService
} from "./services";

/* Repositories */
import {
  UserRepository,
  ProjectRepository,
  UserHistoryRepository,
  TicketRepository,
  EnterpriseRepository
} from "../../dal/repositories";

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(currentEnv),
  })
  .register({
    db: asValue(db),
  })
  .register({
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    ProjectRoutes: asFunction(ProjectRoutes).singleton(),
    UserHistoryRoutes: asFunction(UserHistoryRoutes).singleton(),
    TicketRoutes: asFunction(TicketRoutes).singleton(),
    EnterpriseRoutes: asFunction(EnterpriseRoutes).singleton()
  })
  .register({
    AuthController: asClass(AuthController).singleton(),
    ProjectController: asClass(ProjectController).singleton(),
    UserHistoryController: asClass(UserHistoryController).singleton(),
    TicketController: asClass(TicketController).singleton(),
    EnterpriseController: asClass(EnterpriseController).singleton()
  })
  .register({
    AuthService: asClass(AuthService).singleton(),
    ProjectService: asClass(ProjectService).singleton(),
    UserHistoryService: asClass(UserHistoryService).singleton(),
    TicketService: asClass(TicketService).singleton(),
    EnterpriseService: asClass(EnterpriseService).singleton(),
    UserService: asClass(UserService).singleton()
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    ProjectRepository: asClass(ProjectRepository).singleton(),
    UserHistoryRepository: asClass(UserHistoryRepository).singleton(),
    TicketRepository: asClass(TicketRepository).singleton(),
    EnterpriseRepository: asClass(EnterpriseRepository).singleton()
  });

export { container };
