import { Router } from 'express';
import { db } from '../db/connection.js';
import { todos } from '../db/schema.js';

export const todosRouter = new Router();

todosRouter.get('', async (req, res) => {
  const list = await db.select().from(todos);
  res.json(list);
});
