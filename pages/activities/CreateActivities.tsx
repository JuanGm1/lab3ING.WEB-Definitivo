import { NextPage } from 'next/types';
import { useMutation } from '@apollo/client';
import { SyntheticEvent, useState } from 'react';
import { CREATE_ACTIVITY } from '@graphql/client/activities/mutation/activities';
import { Header } from '@components/header';
import { Footer } from '@components/footer';

// interface CreateActivitiesProps {
//   idDestination: string;
// }

const CreateActivities = (/*{ idDestination }: CreateActivitiesProps*/) => {
  const idDestination  = 'cl7guj1wx0448xcumwfws5sjg';
  const [CreateActivities] = useMutation(CREATE_ACTIVITY);
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const submit = async (e: SyntheticEvent) => {
    const idDestination  = 'cl7guj1wx0448xcumwfws5sjg';
    e.preventDefault();
    const now = new Date();
    const correctFuture = startDate >= now.toISOString();

    var msg = '';
    if (!correctFuture) {
      msg += 'La fecha de inicio debe ser a futuro';
    }
    if (correctFuture) {
      await CreateActivities({
        variables: {
          description: description,
          activityDate: startDate,
          destinationId: idDestination,
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
        <h1>Activity</h1>
        <input
          placeholder='Ingrese descripcion'
          value={description}
          name='Description'
          onChange={e => setDescription(e.target.value)}
        />
        <span>Fecha tentativa de inicio: </span>
        <input
          placeholder='Fecha tentativa de inicio'
          name='startDate'
          type='date'
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
        />
        <button
          type='submit'
          className='btn btn-rounded border-2 ml-4'
          onClick={submit}
        >
          Enviar
        </button>
      </div>
      <Footer />
    </>
  );
};

export default CreateActivities;
