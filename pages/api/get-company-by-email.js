import { getSession } from 'next-auth/client';
import { getCompanyByUserEmail } from '../../utils/Fauna';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (req.method !== 'GET') {
    return res.status(405);
  }

  try {
    // get company
    const userCompanyData = await getCompanyByUserEmail(session.user.email);
    return res.status(200).json(userCompanyData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
}
