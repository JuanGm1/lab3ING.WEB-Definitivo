/*
  Warnings:

  - You are about to drop the column `budgetId` on the `Comentary` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comentary" DROP CONSTRAINT "Comentary_budgetId_fkey";

-- DropIndex
DROP INDEX "Comentary_budgetId_key";

-- AlterTable
ALTER TABLE "Comentary" DROP COLUMN "budgetId";
