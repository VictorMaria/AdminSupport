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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Ticket = mongoose.model('Ticket', TicketSchema);

export default Ticket;