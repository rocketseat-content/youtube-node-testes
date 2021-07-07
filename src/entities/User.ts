class User {
  id?: string;
  name: string;
  username: string;
  email: string;

  private constructor({ name, username, email }: User) {
    return Object.assign(this, {
      name,
      username,
      email,
    });
  }

  static create({ name, username, email }: User) {
    const user = new User({ username, name, email });
    return user;
  }
}

export { User };
