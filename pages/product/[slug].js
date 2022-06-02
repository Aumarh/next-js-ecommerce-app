import { css } from '@emotion/react';
import { Button, Grid, List, ListItem, Typography } from '@mui/material';
// import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import fabricDatabase from '../../util/database';

const sectionStyles = css`
  margin-top: 15px;
  margin-bottom: 15px;

  a {
    text-decoration: none;
  }
`;

const nameStyles = css`
  h1 {
    font-size: 1.6rem;
    font-weight: 400;
    margin: 1rem 0;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: 400;
    margin: 1rem 0;
  }
`;

export default function ProductScreen() {
  // const { dispatch } = useContext(Store);
  const router = useRouter();
  const { slug } = router.query;
  const product = fabricDatabase.products.find((a) => a.slug === slug);
  if (!product) {
    return (
      <div css={nameStyles}>
        <h2>Product Not Found</h2>
      </div>
    );
  }
  // const addToCartHandler = async () => {
  //   const { fabricDatabase } = await axios.get(`/api/product/${product.id}`);
  //   if (fabricDatabase.countInStock <= 0)
  //   return {
  //     window.alert('Sorry. Product is out of stock');
  //   }

  //     dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity: 1 } });
  // };
  return (
    <div>
      <div>
        <Head>
          <title>{product.name}</title>
          <meta
            description={product.description}
            content="About the products"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <div css={sectionStyles}>
        <Typography>
          <Link href="/">back to products</Link>
        </Typography>
      </div>
      <div>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              layout="responsive"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <List>
              <ListItem css={nameStyles}>
                <Typography>
                  <h1>{product.name}</h1>
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Category: {product.category}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Rating: {product.rating} stars</Typography>
              </ListItem>
              <ListItem>
                <Typography>Description: {product.description}</Typography>
              </ListItem>

              <List>
                <ListItem>
                  <Typography>Price: €{product.price}</Typography>
                </ListItem>
                <ListItem>
                  <Typography>
                    Status:{' '}
                    {product.countInStock > 0 ? 'In stock' : 'Not in stock'}
                  </Typography>
                </ListItem>
              </List>

              <ListItem>
                <Button variant="contained" color="primary">
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
