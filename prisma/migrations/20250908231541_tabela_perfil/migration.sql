-- CreateTable
CREATE TABLE "PerfilUsuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomePerfil_Per" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    CONSTRAINT "PerfilUsuario_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuarios" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PerfilUsuario_id_usuario_id_key" ON "PerfilUsuario"("id", "usuario_id");
