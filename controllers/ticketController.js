import Ticket from '../models/Ticket';

class TicketController {
    static async createTicket (req, res) {
        const { name } = req.body;
        try {
            const ticket = new Ticket({
                name,
            })
            await ticket.save();
            return res.status(201).json({
                id: ticket.id,
                name: ticket.name,
            });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};

export default TicketController;
