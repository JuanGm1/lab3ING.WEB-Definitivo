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
    <div>
      <h1>Travel</h1>
      <span>Viaje: </span>
      <span>Usuario a agregar: </span>
      <button type='submit' className='border-2 ml-4' onClick={submit}>
        enviar
      </button>
    </div>
  );
};

export default addUserOnTravel;
