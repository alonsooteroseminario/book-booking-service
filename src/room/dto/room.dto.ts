import { ApiProperty } from '@nestjs/swagger';
export class CreateRoomDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly number: number;
  @ApiProperty()
  readonly occupant: string;
}
