import { Router } from 'express';
import TicketController from '../controllers/ticketController';
import validate from '../validation/validation';
import validationResponse from '../validation/validationResponse';

const router = Router();
const { createTicket, addComment, changeTicketStatus, readTicket, readAllTickets } = TicketController;

router.post('/', validate.newTicket, validationResponse, createTicket);
router.patch('/:id/status', changeTicketStatus);
router.get('/:id', validate.validateId, validationResponse, readTicket);
router.patch('/:id', validate.validateId, validate.newComment, validationResponse, addComment);
router.get('/', readAllTickets);

export default router;

