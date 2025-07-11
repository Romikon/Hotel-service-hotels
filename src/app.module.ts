import { Module } from '@nestjs/common';
import { HotelModule } from './hotel/hotels.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './hotel/db/datasource';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    HotelModule
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
