import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entity/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user-dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async signIn(username, pass): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new HttpException('User Not Found!', HttpStatus.BAD_REQUEST);
    }
    if (user.password !== pass) {
      throw new UnauthorizedException();
    }

    return { access_token: await this.jwtService.signAsync(username) };
  }

  async signUp(
    createUserDto: CreateUserDto,
  ): Promise<{ user: User; access_token: string }> {
    return this.usersService.createUser(createUserDto);
  }
}
