export default class IConfig {
    port: number;
    db: {
      dbPort: number;
      dbHost: string;
      dbUser: string;
      dbPassword: string;
      dbName: string;
      databaseSync: boolean;
    }
}