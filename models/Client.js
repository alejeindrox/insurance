import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/* Clients Schema */
const ClientSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    required: true
  }
});

ClientSchema.methods.validName = ((name, clientName) => {
    return name === clientName ? true : false;
});

export const Client = mongoose.model('client', ClientSchema);