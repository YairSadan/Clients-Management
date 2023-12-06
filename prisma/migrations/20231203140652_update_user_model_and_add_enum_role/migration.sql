/*
 Warnings:
 - You are about to alter the column `role` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
 - A unique constraint covering the columns `[phone]` on the table `User` will be added. If there are existing duplicate values, this will fail.
 - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.
 - Added the required column `pricePerAppointment` to the `User` table without a default value. This is not possible if the table is not empty.
 */

-- AlterTable

ALTER TABLE `AuthrizedPool` MODIFY `fundingSource` VARCHAR(191) NULL;

-- AlterTable

ALTER TABLE `User`
ADD
    COLUMN `fundingSource` VARCHAR(191) NULL,
ADD
    COLUMN `notes` VARCHAR(191) NULL,
ADD
    COLUMN `phone` VARCHAR(191) NOT NULL,
ADD
    COLUMN `pricePerAppointment` INTEGER NOT NULL,
    MODIFY `role` ENUM('ADMIN', 'CLIENT') NOT NULL DEFAULT 'CLIENT';

-- CreateIndex

CREATE UNIQUE INDEX `User_phone_key` ON `User`(`phone`);