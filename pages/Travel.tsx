import GET_USERS from '@graphql/client/users/queries/users';
import { NextPage } from 'next/types';
import { useMutation, useQuery } from '@apollo/client';
import { SyntheticEvent, useEffect } from 'react';
import CREATE_USERS from '@graphql/client/users/mutations/users';

const Travel: NextPage = () => {
  const [createUser] = useMutation(CREATE_USERS);
  const call = async (e: SyntheticEvent) => {
    e.preventDefault();
    await createUser({
      variables: {
        name: 'test',
        starDate: '2021-01-01',
        endDate: '2021-01-01',
      },
    });
  };

  return (
    <div>
      <form onSubmit={call}>
        <h1>Travel</h1>
        <input placeholder='Nombre' name='nombre' type='text' />
        <span>Fecha Inicio: </span>
        <input placeholder='Fecha inicio' name='fecha1' type='date' />
        <input placeholder='Fecha fin' name='fecha2' type='date' />
        <button type='submit' className='border-2 ml-4'>
          enviar
        </button>
      </form>
    </div>
  );
};

export default Travel;
