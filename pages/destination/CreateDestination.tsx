import { NextPage } from 'next/types';
import { useMutation } from '@apollo/client';
import { SyntheticEvent, useState } from 'react';
import { CREATE_DESTINATION } from '@graphql/client/destinations/mutations/destinations';
import { Header } from '@components/header';
import { Footer } from '@components/footer';

const CreateDestination: NextPage = () => {
  const [createDestination] = useMutation(CREATE_DESTINATION);
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
      await createDestination({
        variables: {
          name: name,
          transportation: transportType,
          startDate: startDate,
          endDate: endDate,
        },
      });
    } else {
      alert(msg);
    }
  };

  return (
    <>
      <Header />
      <div>
        <h1>Destination</h1>
        <input
          value={name}
          name='firstName'
          onChange={e => setName(e.target.value)}
        />
        <select onChange={e => setTransportType(e.target.value)}>
          <option>land</option>
          <option>maritime</option>
          <option>aerial</option>
        </select>
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
        <button
          type='submit'
          class='btn btn-rounded border-2 ml-4'
          onClick={call}
        >
          enviar
        </button>
      </div>
      <Footer />
    </>
  );
};

export default CreateDestination;
