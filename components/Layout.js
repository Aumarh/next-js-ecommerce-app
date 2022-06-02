import { css } from '@emotion/react';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';

const navBarStyles = css`
  background: #0071dc;
  /* padding: 20px; */

  a {
    color: #fff;
    margin-left: 10px;
  }
`;

const mainStyles = css`
  min-height: 82vh;
`;

const footerStyles = css`
  color: #fff;
  background: #004f9a;
  padding: 18px 0;
  text-align: center;
  margin-top: 10px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
`;

const brandStyles = css`
  a {
    font-weight: bold;
    font-size: 2.5rem;
    text-decoration: none;
  }
`;

const headerGrowStyles = css`
  flex-grow: 1;
`;

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Fabric Store` : 'Fabric Store'}</title>
        <meta
          name="description"
          content="A one stop shope for all your fabric options"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar css={navBarStyles} position="static">
        <Toolbar>
          <Link href="/" css={brandStyles}>
            Fabric
          </Link>
          <div css={headerGrowStyles} />
          <div>
            {/* <Link href="/products">Product</Link> */}
            <Link href="/cart">Cart</Link>
            <Link href="/sign-in">Sign In</Link>
          </div>
        </Toolbar>
      </AppBar>
      <Container css={mainStyles}>{children}</Container>
      <footer css={footerStyles}>
        <Typography>Fabric store Ⓒ</Typography>
      </footer>
    </div>
  );
}
