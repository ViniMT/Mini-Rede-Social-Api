import { Module } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import { PerfilRepository } from './repository/perfil.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PerfilController],
  providers: [PerfilService, PerfilRepository, PrismaService],
})
export class PerfilModule {}
