import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

async function testConnection() {
  console.log('Testing database connection...');
  console.log(`Host: ${process.env.DB_HOST}`);
  console.log(`User: ${process.env.DB_USER}`);
  console.log(`Database: ${process.env.DB_NAME}`);

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306
    });

    console.log('✅ Successfully connected to the database!');
    
    const [rows] = await connection.execute('SELECT 1 + 1 AS solution');
    console.log('Test query result:', rows[0].solution); // Should be 2

    await connection.end();
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
    if (error.code) {
        console.error('Error Code:', error.code);
    }
  }
}

testConnection();
