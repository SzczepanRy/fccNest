import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class Authcontroller {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  singnUp() {}
  @Post('signIn')
  singnIn() {}
}
