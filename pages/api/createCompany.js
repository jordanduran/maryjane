import { createCompany, getCompanyByUserEmail } from '../../utils/Fauna';

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

  if (!companyEmail || !companyEmail.includes('@')) {
    res.status(422).json({ message: 'Invalid company email address' });
    return;
  }

  try {
    const existingApplication = await getCompanyByUserEmail(email);

    const checkIfExistingApplication = () => {
      return existingApplication.email === email ? true : false;
    };

    if (checkIfExistingApplication) {
      res.status(422).json({
        message:
          'You have already applied for partnership, please allow 1-3 business days for the application to be processed.',
      });
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
