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
  const idDestination = 'cl7guj1wx0448xcumwfws5sjg';
  const [CreateActivities] = useMutation(CREATE_ACTIVITY);
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const submit = async (e: SyntheticEvent) => {
    const idDestination = 'cl7guj1wx0448xcumwfws5sjg';
    e.preventDefault();
    const now = new Date();
    const correctFuture = startDate >= now.toISOString();

    var msg = '';
    if (!correctFuture) {
      msg += 'the initial date must be in the future';
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
    <div className='m-auto'>
      <div className='max-w-sm rounded-xl flex flex-col overflow-hidden shadow-lg m-4 border-blue-100 border-2 bg-blue-50'>
        <div className='px-6 pb-3'>
          <h1 className='font-bold text-xl mb-2 text-blue-200'>Activity</h1>
          <input
            placeholder='Description'
            value={description}
            name='Description'
            onChange={e => setDescription(e.target.value)}
          />
          <br />
          <span className='font-bold text-xl mb-2 text-blue-200'>
            Start date:
          </span>
          <br />
          <input
            placeholder='Fecha tentativa de inicio'
            name='startDate'
            type='date'
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />
          <br />
          <button
            type='submit'
            className='bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded'
            onClick={submit}
          >
            Create activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateActivities;
