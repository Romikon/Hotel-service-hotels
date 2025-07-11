import {
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class UpdateHotelDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly country?: string;

  @IsOptional()
  @IsString()
  readonly address?: string;

  @IsOptional()
  @IsNumber()
  readonly rooms?: number;

  @IsOptional()
  @IsString()
  readonly description?: string;
}
