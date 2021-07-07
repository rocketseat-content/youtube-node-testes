import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepositories";
import { v4 as uuid } from "uuid";

class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    Object.assign(user, {
      id: uuid(),
    });

    this.users.push(user);
    return user;
  }

  async exists(username: string): Promise<boolean> {
    const user = this.users.some((user) => user.username === username);
    return user;
  }
}

export { UsersRepositoryInMemory };
