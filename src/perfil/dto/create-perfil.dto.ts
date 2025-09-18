import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePerfilDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(100, {
        message: 'O nome do perfil pode ter no máximo 100 caracteres',})
    nomePerfil_Per: string;

    @ApiProperty()
    @IsNotEmpty()
    usuario_id: number;
}
