import { NextPage } from 'next/types';
import { useQuery } from '@apollo/client';
import { SyntheticEvent, useEffect, useState } from 'react';
import { GET_TRAVEL_DATA, GET_USER_ON_TRAVEL } from '@graphql/client/travels/queries/travels';

const CreateTravel: NextPage = () => {
  const travelId = 'cl7gt57ft0122xcumuymdpbo2';
  const getCountUsersOnTravelId = 'cl7gt57ft0122xcumuymdpbo2';
  const [name, setName] = useState('');
  const [destinationsName, setDestinations] = useState([]);
  const [budget, setbudget] = useState([]);
  const [comentaryText, setCommentaryText] = useState(''); 


  const { data, loading } = useQuery(GET_TRAVEL_DATA, {
    variables: {
      getTravelId: travelId,
    },
    fetchPolicy: 'no-cache',
  });

  const { data:datatravel, loading:loadingtravel } = useQuery(GET_USER_ON_TRAVEL, {
    variables: {
      getCountUsersOnTravelId: getCountUsersOnTravelId,
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    setCommentaryText("  Cargando...")
    if (!loading) {
      setName(data.name);
      setCommentaryText(datatravel.getCountUsersOnTravel);
      //setDestinations(destinationsName);
      //setbudget(data.destinations.budget);
    }
  }, [data]);

  console.log(datatravel);

  return (
    <div>
      <h1>Travel</h1>
      <span>{name}</span>
      <span>Destino: </span> <br/>
      <span>{destinationsName}</span>
      <span>Presupuesto: </span> <br/>
      <span>{destinationsName }</span>
      <span>Usuarios en viaje: </span>
      <span>{comentaryText}</span>
    </div>
  );
};

export default CreateTravel;
