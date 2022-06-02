import fabricDatabase from '../util/database';

export default function Product(props) {
  return <div>{props.product.name}</div>;
}

export function getServerSideProps(context) {
  const singleProduct = fabricDatabase.find((product) => {
    return product.id === context.query.productId;
  });
  return {
    props: { product: singleProduct },
  };
}
