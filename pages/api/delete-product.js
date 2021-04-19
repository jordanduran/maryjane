import { deleteProduct } from '../../utils/Fauna';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405);
  }

  const { productId } = req.body;

  console.log('PRODUCT ID:', productId);

  try {
    const deletedProduct = await deleteProduct(productId);
    return res.status(200).json(deletedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
}
