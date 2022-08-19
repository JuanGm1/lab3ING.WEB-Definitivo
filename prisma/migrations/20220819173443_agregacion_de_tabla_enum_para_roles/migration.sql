/*
  Warnings:

  - You are about to drop the column `name` on the `Role` table. All the data in the column will be lost.
  - Added the required column `rol` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Enum_Roles" AS ENUM ('tripLeader', 'guest');

-- AlterTable
ALTER TABLE "Role" DROP COLUMN "name",
ADD COLUMN     "rol" "Enum_Roles" NOT NULL;
