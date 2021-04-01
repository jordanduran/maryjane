import { hashPassword } from './auth';
const faunadb = require('faunadb');
const q = faunadb.query;
const faunaClient = new faunadb.Client({
  secret: process.env.FAUNA_SECRET_KEY,
});

// USER API ROUTES

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

const getUserById = async (id) => {
  // Fetches user by id
  const { data } = await faunaClient.query(
    q.Get(q.Match(q.Index('user_by_id'), id))
  );
  return data;
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

// COMPANY API ROUTES

const getCompanies = async () => {
  // Fetches companies from DB
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('companies'))),
      q.Lambda('ref', q.Get(q.Var('ref')))
    )
  );
  const companies = data.map((company) => {
    company.id = company.ref.id;
    delete company.ref;
    return company;
  });
  return companies;
};

const getCompanyById = async (id) => {
  // Fetches company by id
  const { data } = await faunaClient.query(
    q.Get(q.Match(q.Index('company_by_id'), id))
  );
  return data;
};

const getCompanyByEmail = async (email) => {
  // Fetches specific company from DB by email
  const { data } = await faunaClient.query(
    q.Get(q.Match(q.Index('company_by_email'), email))
  );
  return data;
};

const createCompany = async (
  name,
  email,
  phone,
  company,
  companyEmail,
  country,
  street,
  city,
  state,
  zipcode
) => {
  // Creates new company in DB
  return await faunaClient.query(
    q.Create(q.Collection('companies'), {
      data: {
        name,
        email: q.Select('ref', q.Get(q.Match(q.Index('user_by_email'), email))),
        phone,
        company,
        companyEmail,
        country,
        address: {
          street,
          city,
          state,
          zipcode,
        },
        hasApplied: true,
      },
    })
  );
};

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
  getCompanies,
  getCompanyById,
  getCompanyByEmail,
  createCompany,
};
