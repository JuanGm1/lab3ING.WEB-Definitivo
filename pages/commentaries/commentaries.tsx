import { NextPage } from 'next/types';
import { useQuery } from '@apollo/client';
import { SyntheticEvent, useEffect, useState } from 'react';
import { GET_TRAVEL_DATA, GET_USER_ON_TRAVEL } from '@graphql/client/travels/queries/travels';
import { GET_COMMENTARIES } from '@graphql/client/commentaries/queries/commentaries';

const CreateTravel: NextPage = () => {
  const travelId = 'cl7gt57ft0122xcumuymdpbo2';
  const getCountUsersOnTravelId = 'cl7gt57ft0122xcumuymdpbo2';
  const [name, setName] = useState('');
  const [destinationsName, setDestinations] = useState([]);
  const [budget, setbudget] = useState([]);
  const [comentaryText, setCommentaryText] = useState(''); 


  const { data, loading } = useQuery(GET_COMMENTARIES, {
    fetchPolicy: 'no-cache',
  });

  const { data:datatravel, loading:loadingtravel } = useQuery(GET_USER_ON_TRAVEL, {
    variables: {
      getCountUsersOnTravelId: getCountUsersOnTravelId,
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    setCommentaryText("  Cargando... Espere Malparido")
    if (!loading) {
      setCommentaryText(data[0]);
      //setDestinations(destinationsName);
      //setbudget(data.destinations.budget);
    }
  }, [data]);

  console.log(data);

  return (
    <div>
      <span>Comentarios: </span>
      <span>{comentaryText}</span>
    </div>
  );
};

export default CreateTravel;
