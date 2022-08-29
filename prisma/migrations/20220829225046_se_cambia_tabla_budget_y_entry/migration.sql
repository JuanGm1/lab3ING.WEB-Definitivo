/*
  Warnings:

  - You are about to drop the column `amount` on the `Budget` table. All the data in the column will be lost.
  - You are about to drop the column `budgetEntries` on the `Entry` table. All the data in the column will be lost.
  - Added the required column `amount` to the `Entry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Budget" DROP COLUMN "amount";

-- AlterTable
ALTER TABLE "Entry" DROP COLUMN "budgetEntries",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL;
