import { getSession } from 'next-auth/client';
import { getUserByEmail } from '../../utils/Fauna';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method !== 'GET') {
    return res.status(405);
  }

  try {
    // get user
    const users = await getUserByEmail(session.user.email);
    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
}
