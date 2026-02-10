-- CreateIndex
CREATE INDEX "Note_userId_createdAt_idx" ON "Note"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "Note_title_idx" ON "Note"("title");
