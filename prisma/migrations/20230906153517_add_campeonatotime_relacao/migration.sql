/*
  Warnings:

  - You are about to drop the `times` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "campeonatos" DROP CONSTRAINT "campeonatos_timeId_fkey";

-- DropForeignKey
ALTER TABLE "jogadores" DROP CONSTRAINT "jogadores_timeId_fkey";

-- DropTable
DROP TABLE "times";

-- CreateTable
CREATE TABLE "Time" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "fundacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Time_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "campeonatos_times" (
    "campeonatoId" TEXT NOT NULL,
    "timeId" TEXT NOT NULL,

    CONSTRAINT "campeonatos_times_pkey" PRIMARY KEY ("campeonatoId","timeId")
);

-- AddForeignKey
ALTER TABLE "jogadores" ADD CONSTRAINT "jogadores_timeId_fkey" FOREIGN KEY ("timeId") REFERENCES "Time"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos" ADD CONSTRAINT "campeonatos_timeId_fkey" FOREIGN KEY ("timeId") REFERENCES "Time"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_times" ADD CONSTRAINT "campeonatos_times_campeonatoId_fkey" FOREIGN KEY ("campeonatoId") REFERENCES "campeonatos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_times" ADD CONSTRAINT "campeonatos_times_timeId_fkey" FOREIGN KEY ("timeId") REFERENCES "Time"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
