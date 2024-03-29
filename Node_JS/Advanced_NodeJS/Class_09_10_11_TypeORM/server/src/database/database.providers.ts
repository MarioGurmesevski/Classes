import { DataSource } from "typeorm";

export const databaseProviders = [
  {
    provide: "DATA_SOURCE",
    useFactory: async () => {
      const dataSource = new DataSource({
        type: "postgres",
        host: "localhost",
        port: 3000,
        username: "postgres",
        password: "postgres",
        database: "football",
        entities: [__dirname + "/../**/*.entity{.ts,.js}"],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
