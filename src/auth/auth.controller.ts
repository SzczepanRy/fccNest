import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  singnUp() {
    return this.authService.singnUp();
  }
  @Post('signIn')
  singnIn() {
    return this.authService.singnIn();
  }
}
