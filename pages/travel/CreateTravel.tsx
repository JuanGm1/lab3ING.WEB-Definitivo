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
    <div className='m-auto'>
      <div className='max-w-sm rounded-xl flex flex-col overflow-hidden shadow-lg m-4 border-blue-100 border-2 bg-blue-50'>
        <div className='px-6 pb-3'>
          <h1 className='font-bold text-xl mb-2 text-blue-200'>Travel</h1>
          <input
            value={name}
            name='travelname'
            placeholder='Travel name'
            onChange={e => setName(e.target.value)}
          />
          <br />
          <span className='font-bold text-xl mb-2 text-blue-200'>
            Fecha Inicio:
          </span>
          <br />
          <input
            placeholder='Fecha inicio'
            name='startDate'
            type='date'
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
          <br />
          <span className='font-bold text-xl mb-2 text-blue-200'>
            Presupuesto:
          </span>
          <br />
          <input
            placeholder='Fecha fin'
            name='endDate'
            type='date'
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
          <br />
          <button
            type='submit'
            className='bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded'
            onClick={call}
          >
            Create travel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTravel;
