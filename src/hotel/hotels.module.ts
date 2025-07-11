import { Module } from '@nestjs/common';
import { HotelController } from './controllers/hotels.controller';
import { HotelService } from './services/hotels.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './db/datasource';
import { HotelEntity } from './entities/hotel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HotelEntity])],
  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule {}
