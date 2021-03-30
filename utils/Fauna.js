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
  const { data } = await faunaClient.query(
    q.Create(q.Collection('users'), {
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: hashedPassword,
        address: {
          street: formData.streetAddress,
          city: formData.city,
          state: formData.state,
          zipcode: formData.zipcode,
        },
        isVendor: false,
        isAdmin: false,
      },
    })
  );
  return data;
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
