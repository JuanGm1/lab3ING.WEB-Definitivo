import { NextPage } from 'next/types';
import { useMutation } from '@apollo/client';
import { SyntheticEvent, useState } from 'react';
import { CREATE_DESTINATION } from '@graphql/client/destinations/mutations/destinations';
import { CREATE_BUDGET } from '@graphql/client/budget/mutation/budget';
import { Header } from '@components/header';
import { Footer } from '@components/footer';

const CreateDestination: NextPage = () => {
  const [createDestination] = useMutation(CREATE_DESTINATION);
  const [createBudget] = useMutation(CREATE_BUDGET);
  const [name, setName] = useState('');
  const [transportType, setTransportType] = useState('land');
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
      const newDestination = await createDestination({
        variables: {
          name: name,
          transportation: transportType,
          startDate: startDate,
          endDate: endDate,
        },
      });
      await createBudget({
        variables: {
          destinationId: newDestination.data.createDestination.id,
        },
      });
    } else {
      alert(msg);
    }
  };

  return (
    <div className='m-auto'>
      <div className='max-w-sm rounded-xl overflow-hidden shadow-lg m-4 border-blue-100 border-2 bg-blue-50'>
        <div className='px-6 pb-3'>
          <span className='font-bold text-xl mb-2 text-blue-200'>
            <p className='pt-2'>Destination</p>
          </span>
          <input
            value={name}
            name='firstName'
            onChange={e => setName(e.target.value)}
          />
          <br />
          <span className='font-bold text-xl mb-2 text-blue-200'>
            Transportation
          </span>
          <br />
          <select onChange={e => setTransportType(e.target.value)}>
            <option>land</option>
            <option>maritime</option>
            <option>aerial</option>
          </select>
          <br />
          <span className='font-bold text-xl mb-2 text-blue-200'>
            Start date
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
          <span className='font-bold text-xl mb-2 text-blue-200'>End date</span>
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
            className='bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded mr-2'
            onClick={call}
          >
            Create destination
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateDestination;
