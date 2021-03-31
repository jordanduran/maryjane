import { hashPassword } from './auth';
const faunadb = require('faunadb');
const q = faunadb.query;
const faunaClient = new faunadb.Client({
  secret: process.env.FAUNA_SECRET_KEY,
});

const getUsers = async () => {
  // Fetches users from DB
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
  // Fetches specific user from DB by email
  const { data } = await faunaClient.query(
    q.Get(q.Match(q.Index('user_by_email'), email))
  );
  return data;
};

const createUser = async (
  name,
  email,
  password,
  phone,
  street,
  city,
  state,
  zipcode
) => {
  const hashedPassword = await hashPassword(password);

  // Creates new user in DB
  return await faunaClient.query(
    q.Create(q.Collection('users'), {
      data: {
        name,
        email,
        password: hashedPassword,
        phone,
        address: {
          street,
          city,
          state,
          zipcode,
        },
        isAdmin: false,
        isCompanyOwner: false,
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
