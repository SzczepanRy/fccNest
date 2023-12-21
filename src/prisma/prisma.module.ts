import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AuthModule } from 'src/auth/auth.module';
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
