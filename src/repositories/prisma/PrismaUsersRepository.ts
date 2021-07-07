import { prisma } from "../../database/client";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepositories";

class PrismaUsersRepository implements IUsersRepository {
  async exists(username: string): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    return !!user;
  }

  async create({ username, email, name }: User): Promise<User> {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        name,
      },
    });

    return user;
  }
}

export { PrismaUsersRepository };
