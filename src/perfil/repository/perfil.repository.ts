import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerfilDto } from '../dto/create-perfil.dto';
import { PerfilEntity } from '../entities/perfil.entity';
import { UpdatePerfilDto } from '../dto/update-perfil.dto';

@Injectable()
export class PerfilRepository {
  constructor(private readonly prismaRepository: PrismaService) {}

  async create(createPerfilDto: CreatePerfilDto): Promise<PerfilEntity> {
    return await this.prismaRepository.perfilUsuario.create({
      data: createPerfilDto,
    });
  }

  async findAll(): Promise<PerfilEntity[]> {
    return await this.prismaRepository.perfilUsuario.findMany({});
  }

  async findOne(id: number): Promise<PerfilEntity | null> {
    return await this.prismaRepository.perfilUsuario.findFirst({
      where: {
        id,
      },
    });
  }

  async update(
    id: number,
    updatePerfilDto: UpdatePerfilDto,
  ): Promise<PerfilEntity> {
    return await this.prismaRepository.perfilUsuario.update({
      where: {
        id,
      },
      data: updatePerfilDto,
    });
  }

  async remove(id: number): Promise<PerfilEntity> {
    return await this.prismaRepository.perfilUsuario.delete({
      where: {
        id,
      },
    });
  }
}
