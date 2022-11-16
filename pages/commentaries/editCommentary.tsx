import { useMutation, useQuery } from '@apollo/client';
import { CREATE_COMMENTARIES, DELETE_COMMENTARIES, UPDATE_COMMENTARIES } from '@graphql/client/commentaries/mutation/commentaries';
import GET_COMMENTARY from '@graphql/client/commentaries/queries/commentaries';
import { CREATE_REPLY } from '@graphql/client/replies/mutations/replies';
import { GET_USER_ON_TRAVEL } from '@graphql/client/travels/queries/travels';
import React, { SyntheticEvent, useEffect, useState } from 'react'

const editCommentary = () => {
  const [comentaryText, setCommentaryText] = useState(''); 
  const updateComentaryId = 'cl7pk73fl06544oumui08joud';
  const getCountUsersOnTravelId = 'cl7gt57ft0122xcumuymdpbo2';
  const [DeleteCommentaries] = useMutation(DELETE_COMMENTARIES);
  const [CreateCommentaries] = useMutation(CREATE_COMMENTARIES);
  const [UpdateCommentaries] = useMutation(UPDATE_COMMENTARIES);
  const [CreateReply] = useMutation(CREATE_REPLY);
  const userId = 'cl7gt2uy00071xcum1u3ry9rs';
  const { data, loading } = useQuery(GET_USER_ON_TRAVEL, {
    variables: {
      getCountUsersOnTravelId: getCountUsersOnTravelId,
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (data != null) {
      setCommentaryText(data.getCountUsersOnTravel);
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

  const deleteSubmit = async (e: SyntheticEvent) => {
    const comentaryId = 'cl9gdkqpf000luzdwej5nk8y1';
    e.preventDefault();
    await DeleteCommentaries({
        variables: {
          deleteComentaryId: comentaryId,
        },
      });
  };

  const createReply = async (e: SyntheticEvent) => {
    const comentaryId = 'cl9ge4mfm0000oax4yh56guki';
    const userId = 'cl7gt2uy00071xcum1u3ry9rs';
    const replyText = 'NAVIDAD SIN LOS VERDES, QUE FELIZ NAVIDAD';
    e.preventDefault();
    await CreateReply({
        variables: {
          comentaryId: comentaryId,
          userId: userId,
          replyText: replyText,
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
            className='border-2 ml-4  rounded-full'
            onClick={submit}
            >
              Create
        </button>

        <button
            type='submit'
            className='border-2 ml-4  rounded-full bg-slate-200'
            onClick={updateSubmit}
            >
            Update
        </button>

        <button
            type='submit'
            className='border-2 ml-4  rounded-full bg-red-400'
            onClick={deleteSubmit}
            >
            Delete
        </button>

        <button
            type='submit'
            className='border-2 ml-4  rounded-full bg-blue-400'
            onClick={createReply}
            >
            Reply
        </button>

    <div>
      
      Users in travel
    </div>

    </>
  )
}

export default editCommentary