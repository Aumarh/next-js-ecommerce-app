import Head from 'next/head';
import Link from 'next/link';
import fabricDatabase from '../util/database';

export default function Product(props) {
  return (
    <div>
      <Head>
        <title>Product</title>
        <meta name="description" content="About the products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Product</h1>
      <ul>
        {fabricDatabase.products.map((product) => {
          return (
            <li key={`product-${product.id}`}>
              <Link href={`/product/${product.id}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function getServerSideProps() {
  return {
    props: { products: fabricDatabase },
  };
}
