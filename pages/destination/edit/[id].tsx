import { NextPage } from 'next/types';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { SyntheticEvent, useEffect, useState } from 'react';
import {
  UPDATE_DESTINATION,
  DELETE_DESTINATION,
} from '@graphql/client/destinations/mutations/destinations';
import GET_DESTINATION from '@graphql/client/destinations/queries/destinations';
import { Header } from '@components/header';
import { Footer } from '@components/footer';

const EditDestination = () => {
  const router = useRouter();
  const { id } = router.query;
  const [updateDestination] = useMutation(UPDATE_DESTINATION);
  const [deleteDestination] = useMutation(DELETE_DESTINATION);
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [transportType, setTransportType] = useState('land');
  const [destination, setDestination] = useState([]);
  const { data, loading } = useQuery(GET_DESTINATION, {
    variables: {
      getDestinationId: id,
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (data != null) {
      setDestination(data);
    }
  }, [data]);

  useEffect(() => {
    if (!loading) {
      setName(data.getDestination.name);
      const sdYear = data.getDestination.startDate.substring(0, 4) + '-';
      const sdMonth = data.getDestination.startDate.substring(5, 7) + '-';
      const sdDay = data.getDestination.startDate.substring(8, 10);
      const edYear = data.getDestination.endDate.substring(0, 4) + '-';
      const edMonth = data.getDestination.endDate.substring(5, 7) + '-';
      const edDay = data.getDestination.endDate.substring(8, 10);
      setStartDate(sdYear + sdMonth + sdDay);
      setEndDate(edYear + edMonth + edDay);
    }
  }, [data]);

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
      await updateDestination({
        variables: {
          updateDestinationId: id,
          name: name,
          startDate: startDate,
          endDate: endDate,
          transportation: transportType,
        },
      });
      alert('Destino modificado correctamente');
    } else {
      alert(msg);
    }
  };

  const deleteT = async (e: SyntheticEvent) => {
    e.preventDefault();

    await deleteDestination({
      variables: {
        deleteDestinationId: id,
      },
    });
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
          <button
            type='submit'
            className='bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded mr-2'
            onClick={deleteT}
          >
            Delete destination
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDestination;
