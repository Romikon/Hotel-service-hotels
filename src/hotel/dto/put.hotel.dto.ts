import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class UpdateHotelDto {
  @ApiProperty({ example: 'Hilton Hotel' })
  @IsString()
  @IsOptional()
  readonly name?: string;

  @ApiProperty({ example: 'USA' })
  @IsOptional()
  @IsString()
  readonly country?: string;

  @ApiProperty({ example: '123 Main St' })
  @IsOptional()
  @IsString()
  readonly address?: string;

  @ApiProperty({ example: 45 })
  @IsOptional()
  @IsNumber()
  readonly rooms?: number;

  @ApiProperty({ example: 'A modern hotel with excellent amenities.' })
  @IsOptional()
  @IsString()
  readonly description?: string;
}
