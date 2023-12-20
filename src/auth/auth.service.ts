import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';

@Injectable({})
export class AuthService {
  singnUp() {
    return { msg: 'signUp' };
  }

  singnIn() {
    return { msg: 'signIn' };
  }
}
