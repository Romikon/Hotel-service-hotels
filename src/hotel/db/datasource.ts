import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from '../config/config';

const { db } = config;

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: db.dbHost,
  port: db.dbPort,
  username: db.dbUser,
  password: db.dbPassword,
  database: db.dbName,
  synchronize: db.databaseSync,
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
};

export default new DataSource(dataSourceOptions);
