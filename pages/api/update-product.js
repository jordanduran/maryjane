import { updateProduct } from '../../utils/Fauna';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405);
  }

  const {
    productId,
    productType,
    productName,
    gram,
    eighth,
    quarter,
    half,
    ounce,
  } = req.body;

  console.log('UPDATE PRODUCT FORM DATA:', req.body);

  try {
    const updatedProduct = await updateProduct(
      productId,
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
    );
    res.status(200).json(updatedProduct);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
}
