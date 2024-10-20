import { Router } from 'express';
import { db } from '../db/connection.js';
import { todos } from '../db/schema.js';

export const todosRouter = new Router();

todosRouter.get('', async (req, res) => {
  const list = await db.select().from(todos);
  res.json(list);
});

todosRouter.post('', async (req, res) => {
  const [newTodo] = await db
    .insert(todos)
    .values({ text: req.body.text })
    .returning();

  res.json(newTodo);
});
