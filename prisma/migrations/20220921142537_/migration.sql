/*
  Warnings:

  - You are about to drop the column `card_holder_name` on the `CreditCard` table. All the data in the column will be lost.
  - You are about to drop the column `card_number` on the `CreditCard` table. All the data in the column will be lost.
  - You are about to drop the column `client_id` on the `CreditCard` table. All the data in the column will be lost.
  - You are about to drop the column `exp_date` on the `CreditCard` table. All the data in the column will be lost.
  - You are about to drop the column `card_number` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `client_id` on the `Transaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cardNumber]` on the table `CreditCard` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[clientId]` on the table `CreditCard` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cardHolderName` to the `CreditCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardNumber` to the `CreditCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `CreditCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expDate` to the `CreditCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cardNumber` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clientId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CreditCard" DROP CONSTRAINT "CreditCard_client_id_fkey";

-- DropIndex
DROP INDEX "CreditCard_card_number_key";

-- DropIndex
DROP INDEX "CreditCard_client_id_key";

-- AlterTable
ALTER TABLE "CreditCard" DROP COLUMN "card_holder_name",
DROP COLUMN "card_number",
DROP COLUMN "client_id",
DROP COLUMN "exp_date",
ADD COLUMN     "cardHolderName" TEXT NOT NULL,
ADD COLUMN     "cardNumber" TEXT NOT NULL,
ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "expDate" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "card_number",
DROP COLUMN "client_id",
ADD COLUMN     "cardNumber" TEXT NOT NULL,
ADD COLUMN     "clientId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CreditCard_cardNumber_key" ON "CreditCard"("cardNumber");

-- CreateIndex
CREATE UNIQUE INDEX "CreditCard_clientId_key" ON "CreditCard"("clientId");

-- AddForeignKey
ALTER TABLE "CreditCard" ADD CONSTRAINT "CreditCard_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
