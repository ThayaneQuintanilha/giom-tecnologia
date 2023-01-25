const express = require('express');
const tasksDB = require('../db/script');

const router = express.Router();

router.post('/registrar', async (req, res) => {
  const { name, lastName, email, adress } = req.body;
  const [{ insertId }] = await tasksDB.insert(name, lastName, email, adress)

  res.status(201).json({insertId, name, lastName, email, adress})
})

router.get('/buscar', async (_req, res) => {
  const response = await tasksDB.getAll()

  res.status(200).json(response)
})

router.get('/buscar/:id', async (req, res) => {
  const { id } = req.params;

  const result = await tasksDB.getById(id)

  res.status(200).json(result);
})

router.put('/atualizar', async (req, res) => {
  const { name, lastName, email, adress } = req.body;
  const { id } = req.params;

  await tasksDB.update(name, lastName, email, adress);

  res.status(200).json({id, name, lastName, email, adress})
})

router.delete('/deletar', async (req, res) => {
  const { id } = req.params;

  await tasksDB.deleteFromId(id);

  res.status(200).json({ message: `Você excluiu o ${id}` })
})

