import { Router } from 'express';
import TicketController from '../controllers/ticketController';
import validate from '../validation/validation';

const router = Router();
const { createTicket, addComment, changeTicketStatus, readTicket, readAllTickets } = TicketController;

router.post('/', validate.newTicket, createTicket);
router.patch('/:id/status', changeTicketStatus);
router.get('/:id', validate.validateId, readTicket);
router.patch('/:id', validate.validateId, validate.newComment, addComment);
router.get('/', readAllTickets);

export default router;

