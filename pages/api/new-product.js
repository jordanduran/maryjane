import { createProduct } from '../../utils/Fauna';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405);
  }

  const {
    productType,
    productName,
    gram,
    eighth,
    quarter,
    half,
    ounce,
    email,
    productImage,
  } = req.body;

  console.log('NEW PRODUCT FORM DATA:', req.body);

  try {
    const newProduct = await createProduct(
      productType,
      productName,
      gram.gramPrice,
      gram.gramQty,
      eighth.eighthPrice,
      eighth.eighthQty,
      quarter.quarterPrice,
      quarter.quarterQty,
      half.halfPrice,
      half.halfQty,
      ounce.ouncePrice,
      ounce.ounceQty,
      email,
      productImage
    );
    res.status(200).json(newProduct);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
}
