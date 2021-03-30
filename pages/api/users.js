import { getUsers } from '../../utils/Fauna';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405);
  }

  try {
    // get users
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
}
