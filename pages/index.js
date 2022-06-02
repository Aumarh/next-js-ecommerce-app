import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import fabricDatabase from '../util/database';

export default function Home() {
  return (
    <div>
      <div>
        <h1>Fabrics</h1>
        <Grid container spacing={3}>
          {fabricDatabase.products.map((product) => {
            // console.log(fabricDatabase);
            return (
              <Grid item md={4} key={product.id}>
                <Card>
                  <Link href={`/product/${product.slug}`}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={product.image}
                        title={product.name}
                      />
                      <CardContent>
                        <Typography>{product.name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                  <CardActions>
                    €{product.price}
                    <Button variant="outlined" size="small" color="primary">
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const products = await getFabricDatabase();
//   return {
//     props: {
//       products: products,
//     },
//   };
// }
