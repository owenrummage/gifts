-- CreateTable
CREATE TABLE "Gift" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "purchaseURL" TEXT NOT NULL,
    "imageURL" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "priority" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "instructions" TEXT NOT NULL DEFAULT '',
    "reservedBy" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Gift_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gift_name_key" ON "Gift"("name");
