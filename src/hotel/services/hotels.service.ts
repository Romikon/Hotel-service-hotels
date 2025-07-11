import { Injectable, Logger } from '@nestjs/common';
import { GetHotelDto } from '../dto/get.hotel.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelEntity } from '../entities/hotel.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UpdateHotelDto } from '../dto/put.hotel.dto';
import { CreateHotelDto } from '../dto/create.hotel.dto';

@Injectable()
export class HotelService {
  private logger = new Logger('HotelService');
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
      this.logger.error(`Error while getting hotel by ID: ${id}`, e);
      throw new Error('Error while getting hotel by ID: ' + e);
    }
  }

  async getHotels(): Promise<GetHotelDto[]> {
    try {

      return this.hotelRepository.find();
    } catch (e) {
      this.logger.error('Error while getting all hotels from the database', e);
      throw new Error('Error while getting all hotels from the database: ' + e);
    }
    
  }

  async createHotel(hotelDto: CreateHotelDto): Promise<CreateHotelDto> {
    try {
      const hotelEntity = await this.hotelRepository.save(hotelDto);
      
      this.logger.log(`Hotel created with ID: ${hotelEntity.id}`);

      return hotelEntity;
    } catch (e) {
      this.logger.error('Error while creating hotel', e);
      throw new Error('Error while creating hotel: ' + e);
    }
    
  }

  async updateHotel(id: string, updateHotelDto: UpdateHotelDto): Promise<UpdateResult> {
    try {
      const existingHotel = await this.getHotelById(id);

      if (!existingHotel) {
        this.logger.error(`Hotel with ID ${id} does not exist`);
        throw new Error(`Hotel with ID ${id} not found`);
      }

      return this.hotelRepository.update(id, updateHotelDto);
    } catch (e) {
      this.logger.error(`Error while updating hotel with ID: ${id}`, e);
      throw new Error('Error while updating hotel: ' + e);
    }
    
  }

  async deleteHotel(id: string): Promise<DeleteResult> {
    try {
      const existingHotel = await this.getHotelById(id);

      if (!existingHotel) {
        this.logger.error(`Hotel with ID ${id} does not exist`);
        throw new Error(`Hotel with ID ${id} not found`);
      }
      return this.hotelRepository.delete(id);
    } catch (e) {
      this.logger.error(`Error while deleting hotel with ID: ${id}`, e);
      throw new Error('Error while deleting hotel: ' + e);
    }
  }
}
