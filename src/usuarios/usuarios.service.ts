import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioRepository } from './repositories/usuario.repository';

@Injectable()
export class UsuariosService {
  constructor(private readonly repository: UsuarioRepository) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    return await this.repository.create(createUsuarioDto);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async findOneByEmailPass(email: string, pass: string) {
    return await this.repository.findOneByEmailPass(email, pass);
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.repository.update(id, updateUsuarioDto);
  }

  async remove(id: number) {
    return await this.repository.remove(id);
  }
}
