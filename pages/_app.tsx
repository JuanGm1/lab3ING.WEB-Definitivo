import { AppProps } from 'next/app';
import Head from 'next/head';
import useApolloClient from 'hooks/useApolloClient';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import Layout from '@components/layout';

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  const { client } = useApolloClient();
  return (
    <>
      <Head>
        <title>Travels</title>
        <meta name='description' content='content' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToastContainer />
      </ApolloProvider>
    </>
  );
};

export default MyApp;
