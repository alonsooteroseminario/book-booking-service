import { Schema } from 'mongoose';

export const RoomSchema = new Schema({
  name: { type: String, required: true },
  number: Number,
  occupant: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
