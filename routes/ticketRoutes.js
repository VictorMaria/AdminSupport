import { Router } from 'express';
import TicketController from '../controllers/ticketController';

const router = Router();
const { createTicket } = TicketController;

router.post('/', createTicket);

export default router;

