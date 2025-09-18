import { Injectable } from '@nestjs/common';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { PerfilRepository } from './repository/perfil.repository';

@Injectable()
export class PerfilService {
  constructor(private readonly repository: PerfilRepository) {}

  async create(createPerfilDto: CreatePerfilDto) {
    return await this.repository.create(createPerfilDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updatePerfilDto: UpdatePerfilDto) {
    return await this.repository.update(id, updatePerfilDto);
  }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
