import MyComponent from '@components/MyComponent';
import GET_USERS from '@graphql/client/users/queries/users';
import { NextPage } from 'next/types';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const { data } = useQuery(GET_USERS);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('data', data);
  }, [data]);

  return <div>hola</div>;
};

export default Home;
