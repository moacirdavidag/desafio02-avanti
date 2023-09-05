-- AlterTable
ALTER TABLE "campeonatos" ADD COLUMN     "timeId" TEXT;

-- CreateTable
CREATE TABLE "jogadores" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "timeId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "jogadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "times" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "fundacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "times_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "jogadores" ADD CONSTRAINT "jogadores_timeId_fkey" FOREIGN KEY ("timeId") REFERENCES "times"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos" ADD CONSTRAINT "campeonatos_timeId_fkey" FOREIGN KEY ("timeId") REFERENCES "times"("id") ON DELETE SET NULL ON UPDATE CASCADE;
