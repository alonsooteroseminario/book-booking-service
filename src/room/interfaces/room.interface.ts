import { Document } from 'mongoose';

export interface Room extends Document {
  readonly name: string;
  readonly number: number;
  readonly occupant: string;
  readonly createdAt: Date;
}
