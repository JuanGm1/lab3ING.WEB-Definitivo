import { NextPage } from 'next/types';
import { useMutation, useQuery } from '@apollo/client';
import { SyntheticEvent, useEffect, useState } from 'react';
import {
  UPDATE_TRAVEL,
  DELETE_TRAVEL,
} from '@graphql/client/travels/mutations/travels';
import { GET_TRAVEL } from '@graphql/client/travels/queries/travels';

const EditTravel: NextPage = ({ }) => {
  const travelId  = "cl7gt2uy00071xcum1u3ry9rs";
  const [updateTravel] = useMutation(UPDATE_TRAVEL);
  const [deleteTravel] = useMutation(DELETE_TRAVEL);

  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const { data, loading } = useQuery(GET_TRAVEL, {
    variables: {
      getTravelId: travelId,
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (!loading) {
      setName(data.getTravel.name);
      const sdYear = data.getTravel.startDate.substring(0, 4) + '-';
      const sdMonth = data.getTravel.startDate.substring(5, 7) + '-';
      const sdDay = data.getTravel.startDate.substring(8, 10);
      const edYear = data.getTravel.endDate.substring(0, 4) + '-';
      const edMonth = data.getTravel.endDate.substring(5, 7) + '-';
      const edDay = data.getTravel.endDate.substring(8, 10);
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
      await updateTravel({
        variables: {
          updateTravelId: travelId,
          name: name,
          startDate: startDate,
          endDate: endDate,
        },
      });
    } else {
      alert(msg);
    }
  };

  const deleteT = async (e: SyntheticEvent) => {
    e.preventDefault();

    await deleteTravel({
      variables: {
        deleteTravelId: travelId,
      },
    });
  };

  return (
    <div>
      <h1>Travel</h1>
      <div className='max-w-sm rounded-xl overflow-hidden shadow-lg m-4 border-blue-100 border-2 bg-blue-50'>
        <div className='px-6 pb-3'>
          <div className='font-bold text-xl mb-2 text-blue-200'>
            <p className='pt-2'>Viaje</p>
          </div>
          <input
            value={name}
            name='firstName'
            onChange={e => setName(e.target.value)}
          />
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
          <button type='submit' className='border-2 ml-4' onClick={deleteT}>
            eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTravel;
