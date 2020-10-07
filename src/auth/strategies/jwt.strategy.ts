import { UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserEntity } from '../../users/entities/user.entity';
import { UsersService } from '../../users/users.service';

export class JwtStrategy extends PassportStrategy(Strategy, 'jwtlogin') {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      publicKey: process.env.JWT_PUBLIC_KEY.replace(/\\n/g, '\n'),
      secretOrKey: process.env.JWT_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });
  }

  async validate({ sub }) {
    let user: UserEntity = null;
    user = await this.usersService.findById(sub);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
