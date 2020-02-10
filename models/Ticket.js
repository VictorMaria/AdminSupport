import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  status: {
    type: String,
    default: 'opened',
  },
  comments: [],
});

const Ticket = mongoose.model('Ticket', TicketSchema);

export default Ticket;