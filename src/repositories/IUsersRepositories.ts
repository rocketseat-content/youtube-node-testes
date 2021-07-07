import { User } from "../entities/User";

interface IUsersRepository {
  create(user: User): Promise<User>;
  exists(username: string): Promise<boolean>;
}

export { IUsersRepository };
