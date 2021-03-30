import { createUser } from '../../utils/Fauna';
import { hashedPassword } from '../../utils/auth';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405);
  }

  const formData = req.body;

  console.log('NEW USER FORM DATA', formData);

  const hashedPassword = await hashPassword(formData.password);

  let regName = /^([\w]{2,})+\s+([\w\s]{3,})+$/i;

  if (!regName.test(formData.name)) {
    res
      .status(422)
      .json({ message: 'Must enter full name as it states on your state ID' });
    return;
  }

  if (!formData.email || !formData.email.includes('@')) {
    res.status(422).json({ message: 'Invalid email address' });
    return;
  }

  if (!formData.password) {
    res.status(422).json({ message: 'Password is required' });
    return;
  } else if (formData.password.trim().length < 7) {
    res.status(422).json({ message: 'Password must be 7 characters or more' });
    return;
  }

  try {
    const newUser = await getUsers();
    return res.status(200).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
}
