import IConfig from "./entity/config.entity";

export const config: IConfig = {
    port: parseInt(process.env.PORT || '32000', 10),
    db: {
      dbPort: parseInt(process.env.DB_PORT || '54320', 10),
      dbHost: process.env.DB_HOST || 'localhost',
      dbUser: process.env.DB_USER || 'roman1',
      dbPassword: process.env.DB_PASSWORD || '123123',
      dbName: process.env.DB_NAME || 'hotels',
      databaseSync: process.env.DATABASE_SYNC === 'true',
    }
}