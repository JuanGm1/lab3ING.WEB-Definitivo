/* eslint-disable no-unused-vars */
import { NextPage } from 'next/types';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { GET_COMMENTARIES } from '@graphql/client/commentaries/queries/commentaries';

const CreateTravel: NextPage = () => {
  const [name, setName] = useState('');
  const [destinationsName, setDestinations] = useState([]);
  const [budget, setbudget] = useState([]);
  const [comentaryText, setCommentaryText] = useState('');

  const { data, loading } = useQuery(GET_COMMENTARIES, {
    fetchPolicy: 'no-cache',
  });


  useEffect(() => {
    setCommentaryText('  Cargando... Espere Malparido');
    if (!loading) {
      setCommentaryText(data[0]);
    }
  }, [data]);

  // eslint-disable-next-line no-console
  console.log(data);

  return (
    <div>
      <span>Comentarios: </span>
      <span>{comentaryText}</span>
    </div>
  );
};

export default CreateTravel;
