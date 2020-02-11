import Ticket from '../models/Ticket';

class TicketController {
    static async createTicket (req, res) {
        const { name, description } = req.body;
        try {
            const ticket = new Ticket({
                name,
                description,
            })
            await ticket.save();
            return res.status(201).json(ticket);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

    static async addComment (req, res) {
        const { name, message } = req.body;
        const { id } = req.params;
        const ticketMessage = {
            name,
            message,
        }
        try {
            const checkTicket = await Ticket.findOne({
                _id: id,
            })
            if (!checkTicket) {
                return res.status(404).json({ errorMessage: 'Ticket not found' });
            }
            const ticket = await Ticket.findOneAndUpdate(
                { _id: id },
                { $push: { comments: ticketMessage } },
                { new: true },
            )
            return res.status(200).json(ticket);
        } catch (error) {
            res.status(500).json(error)
        }
    }

    static async changeTicketStatus (req, res) {
        const { id } = req.params;
        try {
            const checkTicket = await Ticket.findOne({
                _id: id,
            })
            if (!checkTicket) {
                return res.status(404).json({ errorMessage: 'Ticket not found' });
            }
            // If the status of a ticket is opened or reopened, calling this endpoint will make it closed
            if(checkTicket.status === 'opened' || checkTicket.status === 'reopened') {
                const ticket = await Ticket.findOneAndUpdate(
                    { _id: id },
                    { $set: { status: 'closed' } },
                    { new: true },
            )
            return res.status(200).json({
                id: ticket.id,
                status: ticket.status,
             }); 
            // If it is closed, the status is edited to reopened 
            } else if (checkTicket.status === 'closed') {
            const ticket = await Ticket.findOneAndUpdate(
                { _id: id },
                { $set: { status: 'reopened' } },
                { new: true },
            )
            return res.status(200).json({
               id: ticket.id,
               status: ticket.status,
          }); 
         }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static async readTicket (req, res) {
        const { id } = req.params;
        try { 
            const checkTicket = await Ticket.findOne({ _id: id }, 'id name description status comments createdAt updatedAt');
            if (!checkTicket) {
                return res.status(404).json({ errorMessage: 'Ticket not found' });
            }
            res.status(200).json(checkTicket);
        } catch (error) { 
            return res.status(500).json(error);
        }
    }

    static async readAllTickets (req, res) {
        try { 
            const allTickets = await Ticket.find({}, 'id name description status comments createdAt updatedAt');
            return res.status(200).json(allTickets);
        } catch (error) {
            return res.status(500).json(error);
        }
    }
};

export default TicketController;
