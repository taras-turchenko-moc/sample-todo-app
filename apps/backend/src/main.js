import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { db } from './db/connection.js';
import { todosRouter } from './routers/todos.js';

const APP_PORT = 3000;
const APP_HOST = 'localhost';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/todos', todosRouter)

app.listen(APP_PORT, APP_HOST,() => {
  console.log(`Server is running at http://${APP_HOST}:${APP_PORT}`);
});

process.on('exit', async () => {
  await db.$client.close();
})
