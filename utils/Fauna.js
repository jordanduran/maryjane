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
  const { data, ref } = await faunaClient.query(
    q.Get(q.Match(q.Index('user_by_email'), email))
  );

  return { data, ref };
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

const getCompanyByUserEmail = async (email) => {
  // Fetches specific company from DB by company email
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
        userId: q.Select(
          'ref',
          q.Get(q.Match(q.Index('user_by_email'), email))
        ),
        email,
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

// PRODUCT API ROUTES

const getProducts = async () => {
  // Fetches products from DB
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection('products'))),
      q.Lambda('ref', q.Get(q.Var('ref')))
    )
  );
  const products = data.map((product) => {
    product.id = product.ref.id;
    delete product.ref;
    return product;
  });
  return products;
};

const getProductById = async (id) => {
  // Fetches company by id
  const { data } = await faunaClient.query(
    q.Get(q.Match(q.Index('product_by_id'), id))
  );
  return data;
};

const getProductsByCompanyId = async (id) => {
  // Fetches products by company id
  const { data } = await faunaClient.query(
    q.Map(
      q.Paginate(q.Match(q.Index('products_by_company_id'), id)),
      q.Lambda('ref', q.Get(q.Var('ref')))
    )
  );
  const products = data.map((product) => {
    product.id = product.ref.id;
    delete product.ref;
    return product;
  });
  return products;
};

const createProduct = async (
  productType,
  productName,
  gramPrice,
  gramQty,
  eighthPrice,
  eighthQty,
  quarterPrice,
  quarterQty,
  halfPrice,
  halfQty,
  ouncePrice,
  ounceQty,
  email,
  productImage
) => {
  // Creates new product in DB
  return await faunaClient.query(
    q.Create(q.Collection('products'), {
      data: {
        productType,
        productName,
        companyId: q.Select(
          'ref',
          q.Get(q.Match(q.Index('company_by_email'), email))
        ),
        gram: {
          gramPrice,
          gramQty,
        },
        eighth: {
          eighthPrice,
          eighthQty,
        },
        quarter: {
          quarterPrice,
          quarterQty,
        },
        half: {
          halfPrice,
          halfQty,
        },
        ounce: {
          ouncePrice,
          ounceQty,
        },
        productImage,
      },
    })
  );
};

const updateProduct = async (
  productId,
  productType,
  productName,
  gramPrice,
  gramQty,
  eighthPrice,
  eighthQty,
  quarterPrice,
  quarterQty,
  halfPrice,
  halfQty,
  ouncePrice,
  ounceQty,
) => {
  faunaClient.query(
    q.Update(q.Ref(q.Collection('products'), productId), {
      data: {
        productType,
        productName,
        gram: {
          gramPrice,
          gramQty,
        },
        eighth: {
          eighthPrice,
          eighthQty,
        },
        quarter: {
          quarterPrice,
          quarterQty,
        },
        half: {
          halfPrice,
          halfQty,
        },
        ounce: {
          ouncePrice,
          ounceQty,
        },
      }
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
  getCompanyByUserEmail,
  createCompany,
  getProducts,
  getProductById,
  getProductsByCompanyId,
  createProduct,
  updateProduct,
};
