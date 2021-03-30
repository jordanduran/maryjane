const faunadb = require('faunadb');
const faunaClient = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET_KEY,
});
const q = faunadb.query;

const getUsers = async () => {
  // TODO: get users
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('users'))),
      q.Lambda('ref', q.Get(q.Var('ref')))
    )
  );
  const users = data.map((user) => {
    user.id = user.ref.id;
    delete user.ref;
    return user;
  });
  return users;
};

const getUserById = async () => {
  // TODO: get user by id
};

const createUser = async () => {
  // TODO: create user
};

const updateUser = async () => {
  // TODO: update user
};

const deleteUser = async () => {
  // TODO: delete user
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
