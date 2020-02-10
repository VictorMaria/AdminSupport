import { Router } from 'express';
import ticketRoutes from './ticketRoutes';

const router = Router();

router.use('/tickets', ticketRoutes);

export default router;