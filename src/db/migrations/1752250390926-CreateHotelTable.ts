import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateHotelTable1752250390926 implements MigrationInterface {
    name = 'CreateHotelTable1752250390926'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE hotels (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            name VARCHAR NOT NULL,
            country VARCHAR NOT NULL,
            address VARCHAR NOT NULL,
            rooms INT NOT NULL,
            description TEXT NOT NULL,
            created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
            
        );`);

        await queryRunner.query(`
            CREATE INDEX idx_id ON hotels(id);
        `);
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS hotels;
        `);
        
    }

}
