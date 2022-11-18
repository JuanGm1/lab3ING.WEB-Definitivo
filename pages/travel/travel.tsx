import { NextPage } from 'next/types';
import { useQuery } from '@apollo/client';
import { FaClock } from 'react-icons/fa';
import { SyntheticEvent, useEffect, useState } from 'react';
import {
  GET_TRAVEL_DATA,
  GET_USER_ON_TRAVEL,
} from '@graphql/client/travels/queries/travels';

const CreateTravel: NextPage = () => {
  const travelId = 'cl7gt57ft0122xcumuymdpbo2';
  const getCountUsersOnTravelId = 'cl7gt57ft0122xcumuymdpbo2';
  const [name, setName] = useState('');
  const [destinationsName, setDestinations] = useState([]);
  const [destinationInfo, setDestinationInfo] = useState([]);
  const [budget, setbudget] = useState([]);
  const [budgets, setbudgets] = useState([]);
  const [comentaryText, setCommentaryText] = useState('');

  const { data, loading } = useQuery(GET_TRAVEL_DATA, {
    variables: {
      getTravelId: travelId,
    },
    fetchPolicy: 'no-cache',
  });

  const { data: datatravel, loading: loadingtravel } = useQuery(
    GET_USER_ON_TRAVEL,
    {
      variables: {
        getCountUsersOnTravelId: getCountUsersOnTravelId,
      },
      fetchPolicy: 'no-cache',
    }
  );

  useEffect(() => {
    if (!loading) {
      setName(data.name);
      setCommentaryText(datatravel.getCountUsersOnTravel);
      setDestinations(destinationInfo[0].name);
      setDestinationInfo(data.getTravel.destinations);
      if(destinationInfo != null) {
        setbudgets(destinationInfo[0]);
      }
      //setbudget(data.destinations.budget);
    }
  }, [data]);


  return (
    <>
      {loading && (
        <div className='max-w-sm rounded-xl overflow-hidden shadow-lg m-4 border-blue-100 border-2 bg-blue-50'>
          <div className='px-6 pb-3'>
            <div className='font-bold text-xl mb-2 text-blue-200'>
              <p className='pt-2'>
                <FaClock />
                Cargando contenido
              </p>
            </div>
          </div>
        </div>
      )}
      {!loading && (
        <div className='max-w-sm rounded-xl overflow-hidden shadow-lg m-4 border-blue-100 border-2 bg-blue-50'>
          <div className='px-6 pb-3'>
            <span className='font-bold text-xl mb-2 text-blue-200'>Travel</span>
            <span className='italic flex gap-2'>{data.getTravel.name}</span>
            <span className='font-bold text-xl mb-2 text-blue-200'>
              Destino:
            </span>
            <br />
            <span className='italic flex gap-2'>{destinationsName}</span>
            <span className='font-bold text-xl mb-2 text-blue-200'>
              Presupuesto:
            </span>
            <span className='italic flex gap-2'>{}</span>
            <span className='font-bold text-xl mb-2 text-blue-200'>
              Usuarios en viaje:
            </span>
            <span className='italic flex gap-2'>{comentaryText}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateTravel;
