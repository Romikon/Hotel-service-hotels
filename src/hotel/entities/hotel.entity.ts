import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'hotels' })
export class HotelEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'country', type: 'varchar' })
  country: string;

  @Column({ name: 'address', type: 'varchar' })
  address: string;

  @Column({ name: 'rooms', type: 'int' })
  rooms: number;

  @Column({ name: 'description', type: 'text' })
  description: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
