import { PrismaClient } from "@prisma/client";
import { Router } from "express"
import { PersistenceEngine } from "../../persistence";
import filesRouter from './files'

export default (prisma: PrismaClient, persistence: PersistenceEngine) => {
    const router = Router();

    router.use('/files', filesRouter(prisma, persistence));

    return router;
}