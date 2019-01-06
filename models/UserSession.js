import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/* Clients Schema */
const UserSessionSchema = new Schema({
  userId: {
    type: String,
    default: ''
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  permit: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

export const UserSession = mongoose.model('userSession', UserSessionSchema);