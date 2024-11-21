/*
  Warnings:

  - The primary key for the `Gift` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Gift` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `price` on the `Gift` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Gift" DROP CONSTRAINT "Gift_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "price",
ADD COLUMN     "price" INTEGER NOT NULL,
ADD CONSTRAINT "Gift_pkey" PRIMARY KEY ("id");
