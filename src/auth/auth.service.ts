import { Injectable } from '@nestjs/common';
import { UserEntity } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import JwtResponseObject from './ro/jwt.ro';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<UserEntity> {
    const user = await this.usersService.findByUsername(username);

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        return user;
      }
    }

    return null;
  }

  async login(user: UserEntity): Promise<JwtResponseObject> {
    const payload = {
      username: user.username,
      sub: user.id,
      role: user.role,
    };

    const token = this.jwtService.sign(payload);
    return { token };
  }
}
