-- CreateTable
CREATE TABLE "Form" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "organisation" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormSubmission" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data" JSONB NOT NULL,
    "versionId" TEXT NOT NULL,
    "formId" TEXT NOT NULL,

    CONSTRAINT "FormSubmission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormSchema" (
    "id" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "formId" TEXT NOT NULL,

    CONSTRAINT "FormSchema_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FormBlock" (
    "id" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "extras" JSONB,
    "parentId" TEXT,
    "schemaId" TEXT NOT NULL,

    CONSTRAINT "FormBlock_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FormSubmission" ADD CONSTRAINT "FormSubmission_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormSubmission" ADD CONSTRAINT "FormSubmission_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES "FormSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormSchema" ADD CONSTRAINT "FormSchema_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormBlock" ADD CONSTRAINT "FormBlock_schemaId_fkey" FOREIGN KEY ("schemaId") REFERENCES "FormSchema"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FormBlock" ADD CONSTRAINT "FormBlock_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "FormBlock"("id") ON DELETE SET NULL ON UPDATE CASCADE;
