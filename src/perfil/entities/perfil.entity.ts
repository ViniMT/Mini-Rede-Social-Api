import { PerfilUsuario } from "@prisma/client";

export class PerfilEntity implements PerfilUsuario {
    id: number;
    nomePerfil_Per: string;
    usuario_id: number;
}
