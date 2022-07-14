-- CreateTable
CREATE TABLE "FileComment" (
    "id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "posted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "postedBy" TEXT,
    "fileId" TEXT NOT NULL,

    CONSTRAINT "FileComment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FileComment" ADD CONSTRAINT "FileComment_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
