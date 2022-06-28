import { PrismaClient } from '@prisma/client';
import { Router } from 'express'
import { PersistenceEngine } from '../persistence';

import v1Router from './v1'

export default (prisma: PrismaClient, persistence: PersistenceEngine) => {
    const router = Router();

    router.use('/v1/', v1Router(prisma, persistence))

    return router;
}