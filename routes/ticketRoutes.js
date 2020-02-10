import { Router } from 'express';
import TicketController from '../controllers/ticketController';

const router = Router();
const { createTicket, addComment, changeTicketStatus, readTicket, readAllTickets } = TicketController;

router.post('/', createTicket);
router.patch('/:id/status', changeTicketStatus);
router.get('/:id', readTicket);
router.patch('/:id', addComment);
router.get('/', readAllTickets);

export default router;

