const faunadb = require('faunadb');
const q = faunadb.query;
const faunaClient = new faunadb.Client({
  secret: process.env.FAUNA_SECRET_KEY,
});

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

const getUserByEmail = async (email) => {
  // TODO: get user by email
  const { data } = await faunaClient.query(
    q.Get(q.Match(q.Index('user_by_email'), email))
  );
  return data;
};

const createUser = async (
  name,
  email,
  phone,
  password,
  street,
  city,
  state,
  zipcode
) => {
  // TODO: create user
  return await faunaClient.query(
    q.Create(q.Collection('users'), {
      data: {
        name,
        email,
        phone,
        password,
        address: {
          street,
          city,
          state,
          zipcode,
        },
      },
    })
  );
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
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
