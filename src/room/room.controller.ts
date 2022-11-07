import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Query,
  NotFoundException,
} from '@nestjs/common';

import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/room.dto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post('/create')
  async createRoom(@Res() res, @Body() createRoomDto: CreateRoomDto) {
    const room = await this.roomService.createRoom(createRoomDto);
    return res.status(HttpStatus.OK).json({
      message: 'Room has been created successfully',
      room,
    });
  }

  @Get('/')
  async getRooms(@Res() res) {
    const rooms = await this.roomService.getRooms();
    return res.status(HttpStatus.OK).json(rooms);
  }

  @Delete('/delete')
  async deleteRoom(@Res() res, @Query('roomId') roomId) {
    const room = await this.roomService.deleteRoom(roomId);
    if (!room) throw new NotFoundException('Room does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Room has been deleted',
      room,
    });
  }

  @Put('/update')
  async updateRoom(
    @Res() res,
    @Body() createRoomDto: CreateRoomDto,
    @Query('roomId') roomId,
  ) {
    const room = await this.roomService.updateRoom(roomId, createRoomDto);
    if (!room) throw new NotFoundException('Room does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Room has been successfully updated',
      room,
    });
  }
}
