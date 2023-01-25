const connection = require('./db');

const insert = async (name, lastName, email, adress) => {
  const response = await connection.execute(
    'INSERT INTO giom_tecnologia.infos (name, lastName, email, adress) VALUES (?, ?, ?, ?)',
      [name, lastName, email, adress],
  )

  return response;
}

const getAll = async () => {
  const response = await connection.execute(
    'SELECT * FROM infos',
  );

  return response;
};

const getById = async (id) => {
  const response = await connection.execute(
    'SELECT * FROM infos WHERE idinfos = ?',
      [id],
  );

  return response;
};

const update = async (id, name, lastName, email, adress) => {
  const response = await connection
    .execute('UPDATE infos SET name = ?, lastName = ?, email = ?, adress = ? WHERE idinfos = ? ',
      [name, lastName, email, adress, id]);
  
  return response;
};

const deleteFromId = async (id) => {
  const response = await connection.execute(
    'DELETE FROM infos WHERE idinfos = ?',
      [id]
  )

  return response;
};

module.exports = { insert, getAll, getById, update, deleteFromId }