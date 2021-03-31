import { createUser, getUserByEmail } from '../../utils/Fauna';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405);
  }

  const {
    name,
    email,
    phone,
    password,
    street,
    city,
    state,
    zipcode,
  } = req.body;

  console.log('NEW USER FORM DATA:', req.body);

  let regName = /^([\w]{2,})+\s+([\w\s]{3,})+$/i;

  if (!regName.test(name)) {
    res
      .status(422)
      .json({ message: 'Must enter full name as it states on your state ID' });
    return;
  }

  if (!email || !email.includes('@')) {
    res.status(422).json({ message: 'Invalid email address' });
    return;
  }

  if (!password) {
    res.status(422).json({ message: 'Password is required' });
    return;
  } else if (password.trim().length < 7) {
    res.status(422).json({ message: 'Password must be 7 characters or more' });
    return;
  }

  try {
    const checkIfExistingUser = await getUserByEmail(email);

    if (checkIfExistingUser.email === email) {
      res.status(422).json({ message: 'User already exists!' });
      return;
    }
  } catch (error) {
    // If query for existing user doesn't return an instance, create user
    const newUser = await createUser(
      name,
      email,
      password,
      phone,
      street,
      city,
      state,
      zipcode
    );
    res.status(200).json(newUser);
    return;
  }
}
