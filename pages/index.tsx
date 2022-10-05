import { NextPage } from 'next/types';
import EditTravel from '@pages/travel/EditTravel';
import React from 'react';
import EditDestination from '@pages/destination/EditDestination';
import { InitialPage } from './home/home';

const idDest = 'cl7guj1wx0448xcumwfws5sjg';
const Home: NextPage = () => (
  <div>
    <React.StrictMode>
      <div className='flex flex-col h-full m-4'>
        {/* <EditDestination id={idDest} /> */}
        <InitialPage />
      </div>
    </React.StrictMode>
  </div>
);

export default Home;
