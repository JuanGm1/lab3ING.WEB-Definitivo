/*
  Warnings:

  - The values [entretaiment] on the enum `Enum_CategoryTipe` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Enum_CategoryTipe_new" AS ENUM ('food', 'entertainment', 'transportation', 'shopping');
ALTER TABLE "Entry" ALTER COLUMN "category" TYPE "Enum_CategoryTipe_new" USING ("category"::text::"Enum_CategoryTipe_new");
ALTER TYPE "Enum_CategoryTipe" RENAME TO "Enum_CategoryTipe_old";
ALTER TYPE "Enum_CategoryTipe_new" RENAME TO "Enum_CategoryTipe";
DROP TYPE "Enum_CategoryTipe_old";
COMMIT;
