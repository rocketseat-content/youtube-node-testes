import { Router } from "express";
import { createUserFactory } from "../modules/createUser/CreateUserFactory";

const routes = Router();

routes.post("/users", (request, response) =>
  createUserFactory().handle(request, response)
);

export { routes };
