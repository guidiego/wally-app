import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Provider } from 'react-redux';
import { Grid, PageHeader, Navbar, NavItem, Nav } from 'react-bootstrap';
import { store } from 'isolate-redux-env';

export const PageContainer = ({ children, title }) => (
  <Provider store={store} >
    <div>
        <Head>
            <title> Morphine - {title}</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
        </Head>
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Morphine</a>
                </Navbar.Brand>
            </Navbar.Header>

            <ul className="nav navbar-nav navbar-right">
                <li><Link href="/counter"> Counter </Link></li>
                <li><Link href="/users"> Users </Link></li>
            </ul >
        </Navbar>
        <Grid>
            { children }
        </Grid>
    </div>
  </Provider>
);

export default PageContainer;
