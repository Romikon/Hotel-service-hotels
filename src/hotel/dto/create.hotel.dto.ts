import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreateHotelDto {
  @ApiProperty({ example: 'Grand Hotel' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: 'Ukraine' })
  @IsNotEmpty()
  @IsString()
  readonly country: string;

  @ApiProperty({ example: 'Kyiv, Khreshchatyk St, 1' })
  @IsNotEmpty()
  @IsString()
  readonly address: string;

  @ApiProperty({ example: 40 })
  @IsNotEmpty()
  @IsNumber()
  readonly rooms: number;

  @ApiProperty({ example: 'A luxury hotel in the heart of the city.' })
  @IsNotEmpty()
  @IsString()
  readonly description: string;
}
