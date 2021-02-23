import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users = [
    {
      userId: 1,
      username: 'promotor',
      password: '123456',
    },
    {
      userId: 2,
      username: 'evaluador',
      password: '123456',
    },
  ];

  async findOne(username) {
    return this.users.find((user) => user.username === username);
  }
}
