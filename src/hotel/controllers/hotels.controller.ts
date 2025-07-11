import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { HotelService } from '../services/hotels.service';
import { GetHotelDto } from '../dto/get.hotel.dto';
import { UpdateHotelDto } from '../dto/put.hotel.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateHotelDto } from '../dto/create.hotel.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('hotels')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @ApiResponse({
    status: 200,
    description: 'Hotel list',
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'array',
          items: { $ref: JSON.stringify(GetHotelDto) },
        },
      },
    },
  })
  @Get()
  getHotels(): Promise<GetHotelDto[]> {
    return this.hotelService.getHotels();
  }

  @ApiResponse({
    status: 200,
    description: 'Hotel by id',
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'GetHotelDto',
          items: { $ref: JSON.stringify(GetHotelDto) },
        },
      },
    },
  })
  @Get(':id')
  getHotelById(@Param('id') id: string): Promise<GetHotelDto> {
    return this.hotelService.getHotelById(id);
  }

  @ApiResponse({
    status: 200,
    description: 'Create new hotel',
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'CreateHotelDto',
          items: { $ref: JSON.stringify(CreateHotelDto) },
        },
      },
    },
  })
  @Post()
  createHotel( 
    @Body() hotelDto: CreateHotelDto,
  ): Promise<CreateHotelDto> {
    return this.hotelService.createHotel(hotelDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Delete hotel by id',
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'UpdateResult',
          items: { $ref: JSON.stringify(UpdateResult) },
        },
      },
    },
  })
  @Put(':id')
  async updateHotel(
    @Param('id') id: string,
    @Body() hotelDto: UpdateHotelDto,
  ): Promise<UpdateResult> {
    return this.hotelService.updateHotel(id, hotelDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Delete hotel by id',
    schema: {
      type: 'object',
      properties: {
        data: {
          type: 'DeleteResult',
          items: { $ref: JSON.stringify(DeleteResult) },
        },
      },
    },
  })
  @Delete(':id')
  deleteHotel(@Param('id') id: string): Promise<DeleteResult> {
    return this.hotelService.deleteHotel(id);
  }
}
