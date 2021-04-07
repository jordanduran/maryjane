import ProductItem from './ProductItem';

const ProductList = (props) => {
  return (
    <ul
      role='list'
      className='mt-5 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'
    >
      {props.products.map((product) => (
        <ProductItem
          key={product.productId}
          id={product.productId}
          productName={product.productName}
          productType={product.productType}
          productImage={product.productImage}
          gram={product.gram}
          eighth={product.eighth}
          quarter={product.quarter}
          half={product.half}
          ounce={product.ounce}
          onEditBtnClicked={props.onEditBtnClicked}
          onSetEditBtnClicked={props.onSetEditBtnClicked}
        />
      ))}
    </ul>
  );
};

export default ProductList;
