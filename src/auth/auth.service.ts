import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);

    if (user && await bcrypt.compare(pass, user.password)) {
      console.log("validateUser");
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = {
      sub: user._doc._id,
      email: user._doc.username,
      createdAt: user._doc.createdAt,
    };

    return {
      accesss_token: this.jwtService.sign(payload),
    };
  }
}
