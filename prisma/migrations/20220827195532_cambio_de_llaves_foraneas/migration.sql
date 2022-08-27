/*
  Warnings:

  - You are about to drop the column `budgetId` on the `Destination` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[destinationId]` on the table `Budget` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `destinationId` to the `Budget` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Destination" DROP CONSTRAINT "Destination_budgetId_fkey";

-- DropIndex
DROP INDEX "Destination_budgetId_key";

-- AlterTable
ALTER TABLE "Budget" ADD COLUMN     "destinationId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Destination" DROP COLUMN "budgetId";

-- CreateIndex
CREATE UNIQUE INDEX "Budget_destinationId_key" ON "Budget"("destinationId");

-- AddForeignKey
ALTER TABLE "Budget" ADD CONSTRAINT "Budget_destinationId_fkey" FOREIGN KEY ("destinationId") REFERENCES "Destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
