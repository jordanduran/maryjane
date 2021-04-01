import { createCompany, getCompanyByEmail } from '../../utils/Fauna';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405);
  }

  const {
    name,
    email,
    phone,
    company,
    companyEmail,
    country,
    street,
    city,
    state,
    zipcode,
  } = req.body;

  console.log('NEW COMPANY FORM DATA:', req.body);

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

  if (!companyEmail || !companyEmail.includes('@')) {
    res.status(422).json({ message: 'Invalid company email address' });
    return;
  }

  try {
    const checkIfExistingApplication = await getCompanyByEmail(email);

    if (checkIfExistingApplication.email === email) {
      res
        .status(422)
        .json({ message: 'User has already applied to be a partner' });
      return;
    }
  } catch (error) {
    // If query for existing application doesn't return an instance, create company
    const newCompany = await createCompany(
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
    );
    res.status(200).json(newCompany);
    return;
  }
}
