import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  singnUp(@Body() dto: AuthDto) {
    return this.authService.singnUp(dto);
  }
  @Post('signIn')
  singnIn(@Body() dto: AuthDto) {
    return this.authService.singnIn(dto);
  }
}
