/*
  Warnings:

  - You are about to drop the column `timeId` on the `campeonatos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "campeonatos" DROP CONSTRAINT "campeonatos_timeId_fkey";

-- AlterTable
ALTER TABLE "campeonatos" DROP COLUMN "timeId";

-- CreateTable
CREATE TABLE "_CampeonatoToTime" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CampeonatoToTime_AB_unique" ON "_CampeonatoToTime"("A", "B");

-- CreateIndex
CREATE INDEX "_CampeonatoToTime_B_index" ON "_CampeonatoToTime"("B");

-- AddForeignKey
ALTER TABLE "_CampeonatoToTime" ADD CONSTRAINT "_CampeonatoToTime_A_fkey" FOREIGN KEY ("A") REFERENCES "campeonatos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampeonatoToTime" ADD CONSTRAINT "_CampeonatoToTime_B_fkey" FOREIGN KEY ("B") REFERENCES "Time"("id") ON DELETE CASCADE ON UPDATE CASCADE;
