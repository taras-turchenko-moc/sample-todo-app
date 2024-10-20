import { Router } from 'express';
import { eq } from 'drizzle-orm';
import { db } from '../db/connection.js';
import { todos } from '../db/schema.js';

export const todosRouter = new Router();

todosRouter.get('/', async (req, res) => {
  const list = await db.select().from(todos).orderBy(todos.id, 'desc');
  res.json(list);
});

todosRouter.post('/', async (req, res) => {
  const [newTodo] = await db
    .insert(todos)
    .values({ text: req.body.text })
    .returning();

  res.json(newTodo);
});

todosRouter.patch('/:id', async (req, res) => {
  await db
    .update(todos)
    .set({ completed: req.body.completed })
    .where(eq(todos.id, req.params.id));

  res.json({ success: true });
});
