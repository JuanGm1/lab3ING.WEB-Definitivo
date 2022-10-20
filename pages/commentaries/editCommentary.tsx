import { useMutation, useQuery } from '@apollo/client';
import { CREATE_COMMENTARIES, UPDATE_COMMENTARIES } from '@graphql/client/commentaries/mutation/commentaries';
import GET_COMMENTARY from '@graphql/client/commentaries/queries/commentaries';
import React, { SyntheticEvent, useEffect, useState } from 'react'

const editCommentary = () => {






  const [comentaryText, setCommentaryText] = useState(''); 
  const updateComentaryId = 'cl7pk73fl06544oumui08joud';
  const [CreateCommentaries] = useMutation(CREATE_COMMENTARIES);
  const [UpdateCommentaries] = useMutation(UPDATE_COMMENTARIES);
  const userId = 'cl7gt2uy00071xcum1u3ry9rs';
  const { data, loading } = useQuery(GET_COMMENTARY, {
    variables: {
        getComentaryId: updateComentaryId,
    },
    fetchPolicy: 'no-cache',
  });
  useEffect(() => {
    if (data != null) {
      setCommentaryText(data.getComentary.comentaryText);
    }
    console.log(data);
  }, [data]);



  const submit = async (e: SyntheticEvent) => {
    const destinationId  = 'cl7gx2x120026h8uz3qvhqis6';
    e.preventDefault();
    await CreateCommentaries({
        variables: {
          comentaryText: comentaryText,
          destinationId: destinationId,
          userId: userId,
        },
      });
  };

  const updateSubmit = async (e: SyntheticEvent) => {
    const destinationId  = 'cl7gx2x120026h8uz3qvhqis6';
    e.preventDefault();
    await UpdateCommentaries({
        variables: {
          comentaryText: comentaryText,
          updateComentaryId: updateComentaryId,
        },
      });
  };




  return (
    <>

    <input
          placeholder='Ingrese comentario al destino'
          value={comentaryText}
          name='commentaryText'
          onChange={e => setCommentaryText(e.target.value)}
          className="border-2 bg-gray-200 rounded-md p-2"
        />
        <button
            type='submit'
            className='border-2 ml-4 w-8 h-8 rounded-full bg-black'
            onClick={submit}
            />



        <button
            type='submit'
            className='border-2 ml-4 w-8 h-8 rounded-full bg-blue'
            onClick={updateSubmit}
            />
    <div>editCommentary</div>

    </>
  )
}

export default editCommentary