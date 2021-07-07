import { Request, Response } from "express";
import { CreateUserService } from "./CreateUserService";

class CreateUserController {
  constructor(private createUser: CreateUserService) {}

  async handle(request: Request, response: Response) {
    const { email, username, name } = request.body;
    const user = await this.createUser.execute({ email, username, name });

    return response.json(user);
  }
}

export { CreateUserController };
