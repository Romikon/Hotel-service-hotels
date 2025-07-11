import {
  IsString,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class GetHotelDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly country: string;

  @IsNotEmpty()
  @IsString()
  readonly address: string;

  @IsNotEmpty()
  @IsNumber()
  readonly rooms: number;

  @IsNotEmpty()
  @IsString()
  readonly description: string;
}
