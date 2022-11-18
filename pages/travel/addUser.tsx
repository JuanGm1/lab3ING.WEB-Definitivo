import { NextPage } from 'next/types';
import { useMutation } from '@apollo/client';
import { SyntheticEvent, useState } from 'react';
import { ADD_USER_ON_TRAVEL } from '@graphql/client/travels/mutations/travels';

const addUserOnTravel: NextPage = () => {
  const travelId = 'cl7gt57ft0122xcumuymdpbo2';
  const userId = 'cl7gtxhw00026isumy26zajik';
  const [AddUserOnTravel] = useMutation(ADD_USER_ON_TRAVEL);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await AddUserOnTravel({
      variables: {
        travelId: travelId,
        userId: userId,
      },
    });
  };

  return (
    <div className='m-auto'>
      <div className='max-w-sm rounded-xl flex flex-col overflow-hidden shadow-lg m-4 border-blue-100 border-2 bg-blue-50'>
        <div className='px-6 pb-3'>
          <span className='font-bold text-xl mb-2 text-blue-200'>Travel</span>
          <span className='italic flex gap-2'>Tour prueba 1</span>
          <span className='font-bold text-xl mb-2 text-blue-200'>
            Usuario a agregar:
          </span>
          <br />
          <span className='italic flex gap-2'>Andreita</span>
          <button
            type='submit'
            className='bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded'
            onClick={submit}
          >
            Add user
          </button>
        </div>
      </div>
    </div>
  );
};

export default addUserOnTravel;
