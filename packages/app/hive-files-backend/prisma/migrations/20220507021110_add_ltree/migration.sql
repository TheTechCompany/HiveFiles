/*
  Warnings:

  - You are about to drop the column `parentId` on the `File` table. All the data in the column will be lost.
  - Added the required column `path` to the `File` table without a default value. This is not possible if the table is not empty.

*/
CREATE EXTENSION IF NOT EXISTS ltree;

-- DropForeignKey
ALTER TABLE "File" DROP CONSTRAINT "File_parentId_fkey";

-- AlterTable
ALTER TABLE "File" DROP COLUMN "parentId",
ADD COLUMN     "path" ltree NOT NULL;
