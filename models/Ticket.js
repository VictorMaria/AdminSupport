import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true })

const TicketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'opened',
  },
  comments: [commentSchema],
}, { timestamps: true });

const Ticket = mongoose.model('Ticket', TicketSchema);

export default Ticket;