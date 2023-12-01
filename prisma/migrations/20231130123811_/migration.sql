/*
  Warnings:

  - You are about to drop the `EmailsPoos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `EmailsPoos`;

-- CreateTable
CREATE TABLE `AuthrizedPool` (
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `AuthrizedPool_phone_key`(`phone`),
    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
