-- CreateTable
CREATE TABLE "campeonatos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_fim" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "campeonatos_pkey" PRIMARY KEY ("id")
);
