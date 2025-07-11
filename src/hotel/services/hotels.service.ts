import { Injectable } from '@nestjs/common';
import { GetHotelDto } from '../dto/get.hotel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelEntity } from '../entities/hotel.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UpdateHotelDto } from '../dto/put.hotel.dto';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(HotelEntity)
    private readonly hotelRepository: Repository<HotelEntity>,
  ) {}

  async getHotelById(id: string): Promise<GetHotelDto> {
    try {
      const hotel = await this.hotelRepository.findOneBy({ id });

      if (!hotel) {
        throw new Error(`Hotel with ID ${id} not found`);
      }

      return hotel;
    } catch (e) {
      throw new Error('Error while getting hotel by ID: ' + e);
    }
  }

  async getHotels(): Promise<GetHotelDto[]> {
    try {

      return this.hotelRepository.find();
    } catch (e) {
      throw new Error('Error while getting all hotels from the database: ' + e);
    }
    
  }

  async createHotel(hotelDto: GetHotelDto): Promise<GetHotelDto> {
    try {
      const hotelEntity = await this.hotelRepository.save(hotelDto);
      
      return hotelEntity;
    } catch (e) {
      throw new Error('Error while creating hotel: ' + e);
    }
    
  }

  async updateHotel(id: string, updateHotelDto: UpdateHotelDto): Promise<UpdateResult> {
    try {

      return this.hotelRepository.update(id, updateHotelDto);
    } catch (e) {
      throw new Error('Error while updating hotel: ' + e);
    }
    
  }

  deleteHotel(id: string): Promise<DeleteResult> {
    try {

      return this.hotelRepository.delete(id);
    } catch (e) {
      throw new Error('Error while deleting hotel: ' + e);
    }
  }
}
