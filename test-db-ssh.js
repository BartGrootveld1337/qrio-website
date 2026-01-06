import mysql from 'mysql2/promise';
import { Client } from 'ssh2';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

async function testSSHConnection() {
  console.log('Testing database connection via SSH tunnel...');
  
  const sshConfig = {
    host: process.env.SSH_HOST,
    port: 22,
    username: process.env.SSH_USER,
    password: process.env.SSH_PASSWORD
  };

  const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
  };

  console.log(`SSH Host: ${sshConfig.host}`);
  console.log(`DB Host: ${dbConfig.host}`);

  return new Promise((resolve, reject) => {
    const sshClient = new Client();

    sshClient.on('ready', () => {
      console.log('✅ SSH Connection established!');
      
      sshClient.forwardOut(
        '127.0.0.1',
        12345,
        dbConfig.host,
        dbConfig.port,
        async (err, stream) => {
          if (err) {
            console.error('❌ Failed to forward port:', err);
            sshClient.end();
            return reject(err);
          }

          console.log('✅ Port forwarding established!');

          try {
            // Create a connection using the stream
            const connection = await mysql.createConnection({
              ...dbConfig,
              stream: stream
            });

            console.log('✅ Successfully connected to the database through SSH!');
            
            const [rows] = await connection.execute('SELECT 1 + 1 AS solution');
            console.log('Test query result:', rows[0].solution); // Should be 2

            await connection.end();
            sshClient.end();
            resolve();
          } catch (dbError) {
            console.error('❌ Database connection failed:', dbError.message);
            sshClient.end();
            reject(dbError);
          }
        }
      );
    }).on('error', (err) => {
      console.error('❌ SSH Connection failed:', err.message);
      reject(err);
    }).connect(sshConfig);
  });
}

testSSHConnection().catch(console.error);
