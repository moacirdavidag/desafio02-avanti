-- DropForeignKey
ALTER TABLE "campeonatos_times" DROP CONSTRAINT "campeonatos_times_campeonatoId_fkey";

-- DropForeignKey
ALTER TABLE "campeonatos_times" DROP CONSTRAINT "campeonatos_times_timeId_fkey";

-- AddForeignKey
ALTER TABLE "campeonatos_times" ADD CONSTRAINT "campeonatos_times_campeonatoId_fkey" FOREIGN KEY ("campeonatoId") REFERENCES "campeonatos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campeonatos_times" ADD CONSTRAINT "campeonatos_times_timeId_fkey" FOREIGN KEY ("timeId") REFERENCES "Time"("id") ON DELETE CASCADE ON UPDATE CASCADE;
