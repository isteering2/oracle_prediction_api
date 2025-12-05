import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig = {
  connection: 'pg',
  connections: {
    pg: {
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'your_username',
        password: 'your_password',
        database: 'your_database_name',
      },
      pool: {
        min: 2,
        max: 10,
      },
    },
  },
}

export default databaseConfig