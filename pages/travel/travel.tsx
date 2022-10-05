import { NextPage } from 'next/types';
import { useQuery } from '@apollo/client';
import { SyntheticEvent, useEffect, useState } from 'react';
import { GET_TRAVEL_DATA } from '@graphql/client/travels/queries/travels';

const CreateTravel: NextPage = () => {
  const travelId = 'cl7gt57ft0122xcumuymdpbo2';
  const [name, setName] = useState('');
  const [destinationsName, setDestinations] = useState([]);
  const [budget, setbudget] = useState([]);

  const { data, loading } = useQuery(GET_TRAVEL_DATA, {
    variables: {
      getTravelId: travelId,
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (!loading) {
      setName(data.name);
      //setDestinations(destinationsName);
      //setbudget(data.destinations.budget);
    }
  }, [data]);

  return (
    <div>
      <h1>Travel</h1>
      <span>{name}</span>
      <span>Destino: </span>
      <span>{destinationsName}</span>
      <span>Presupuesto: </span>
      <span>{destinationsName}</span>
    </div>
  );
};

export default CreateTravel;
