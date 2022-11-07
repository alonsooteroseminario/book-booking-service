import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Room } from './interfaces/room.interface';
import { CreateRoomDto } from './dto/room.dto';

@Injectable()
export class RoomService {
  constructor(@InjectModel('Room') private readonly roomModel: Model<Room>) {}

  async getRooms(): Promise<Room[]> {
    const rooms = await this.roomModel.find();
    return rooms;
  }

  async getRoom(roomId: string): Promise<Room> {
    const room = await this.roomModel.findById(roomId);
    return room;
  }

  async createRoom(createRoomDto: CreateRoomDto): Promise<Room> {
    const room = new this.roomModel(createRoomDto);
    return await room.save();
  }

  async deleteRoom(roomId: string): Promise<Room> {
    const room = await this.roomModel.findByIdAndDelete(roomId);
    return room;
  }

  async updateRoom(
    roomId: string,
    createRoomDto: CreateRoomDto,
  ): Promise<Room> {
    const room = await this.roomModel.findByIdAndUpdate(roomId, createRoomDto, {
      new: true,
    });
    return room;
  }
}
