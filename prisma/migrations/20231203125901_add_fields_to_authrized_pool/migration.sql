/*
  Warnings:

  - The primary key for the `AuthrizedPool` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[email]` on the table `AuthrizedPool` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fundingSource` to the `AuthrizedPool` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `AuthrizedPool` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `name` to the `AuthrizedPool` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricePerAppointment` to the `AuthrizedPool` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `AuthrizedPool` DROP PRIMARY KEY,
    ADD COLUMN `fundingSource` VARCHAR(191) NOT NULL,
    ADD COLUMN `id` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `notes` VARCHAR(191) NULL,
    ADD COLUMN `pricePerAppointment` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `AuthrizedPool_email_key` ON `AuthrizedPool`(`email`);
