import { NextPage } from 'next/types';
import { useMutation } from '@apollo/client';
import { SyntheticEvent, useState } from 'react';
import { CREATE_TRAVEL } from '@graphql/client/travels/mutations/travels';

const CreateTravel: NextPage = () => {
  const [createTravel] = useMutation(CREATE_TRAVEL);
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const call = async (e: SyntheticEvent) => {
    e.preventDefault();
    const correctDates = startDate < endDate;
    const now = new Date();
    const correctFuture = startDate >= now.toISOString();

    var msg = '';
    if (!correctDates) {
      msg = 'La fecha de inicio debe ser menor a la fecha de fin del viaje';
    }
    if (!correctFuture) {
      msg += 'La fecha de inicio debe ser a futuro';
    }
    if (correctDates && correctFuture) {
      await createTravel({
        variables: { name, startDate, endDate },
      });
    } else {
      alert(msg);
    }
  };

  return (
    <div>
      <h1>Travel</h1>
      <input
        value={name}
        name='firstName'
        onChange={e => setName(e.target.value)}
      />
      <span>Fecha Inicio: </span>
      <input
        placeholder='Fecha inicio'
        name='startDate'
        type='date'
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
      />
      <input
        placeholder='Fecha fin'
        name='endDate'
        type='date'
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
      />
      <button type='submit' className='border-2 ml-4' onClick={call}>
        enviar
      </button>
    </div>
  );
};

export default CreateTravel;
