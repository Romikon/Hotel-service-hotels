import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { HotelService } from '../services/hotels.service';
import { GetHotelDto } from '../dto/get.hotel.dto';
import { UpdateHotelDto } from '../dto/put.hotel.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateHotelDto } from '../dto/create.hotel.dto';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get()
  getHotels(): Promise<GetHotelDto[]> {
    return this.hotelService.getHotels();
  }

  @Get(':id')
  getHotelById(@Param('id') id: string): Promise<GetHotelDto> {
    return this.hotelService.getHotelById(id);
  }

  @Post()
  createHotel( 
    @Body() hotelDto: CreateHotelDto,
  ): Promise<CreateHotelDto> {
    return this.hotelService.createHotel(hotelDto);
  }

  @Put(':id')
  async updateHotel(
    @Param('id') id: string,
    @Body() hotelDto: UpdateHotelDto,
  ): Promise<UpdateResult> {
    return this.hotelService.updateHotel(id, hotelDto);
  }

  @Delete(':id')
  deleteHotel(@Param('id') id: string): Promise<DeleteResult> {
    return this.hotelService.deleteHotel(id);
  }
}
