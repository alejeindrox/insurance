import mongoose from 'mongoose';
const Schema = mongoose.Schema;

/* Policies Schema */
const PolicySchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  amountInsured: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  inceptionDate: {
    type: Date,
    required: true
  },
  installmentPayment: {
    type: Boolean,
    default: false
  },
  clientId: {
    type: String,
    required: true
  }
});

export const Policy = mongoose.model('policy', PolicySchema);