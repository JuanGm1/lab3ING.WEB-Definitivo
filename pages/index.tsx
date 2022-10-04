import { NextPage } from 'next/types';
import EditTravel from '@pages/travel/EditTravel';
import React from 'react';
import EditDestination from '@pages/destination/EditDestination';

const idDest = 'cl7guj1wx0448xcumwfws5sjg';
const Home: NextPage = () => (
  <div>
    <React.StrictMode>
      <EditDestination id={idDest} />
    </React.StrictMode>
  </div>
);

export default Home;
