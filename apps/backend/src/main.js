import express from 'express';
import bodyParser from 'body-parser';
import { db } from './db/connection.js';
import { todosRouter } from './routers/todos.js';

const APP_PORT = 3000;
const APP_HOST = '0.0.0.0';

const app = express();

app.use(bodyParser.json());
app.use('/api/todos', todosRouter)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
})

app.listen(APP_PORT, APP_HOST,() => {
  console.log(`Server is running at http://${APP_HOST}:${APP_PORT}`);
});

process.on('exit', async () => {
  await db.$client.close();
})
