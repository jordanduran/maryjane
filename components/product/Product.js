const Product = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.product.productName}</h1>
    </div>
  );
};

export default Product;
