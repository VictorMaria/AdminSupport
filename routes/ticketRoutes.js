import { Router } from 'express';
import TicketController from '../controllers/ticketController';

const router = Router();
const { createTicket, addComment, changeTicketStatus } = TicketController;

router.post('/', createTicket);
router.patch('/:id/status', changeTicketStatus);
router.patch('/:id', addComment);

export default router;

