import { useMutation } from '@apollo/client';
import { CREATE_COMMENTARIES } from '@graphql/client/commentaries/mutation/commentaries';
import React, { SyntheticEvent, useState } from 'react';

const createCommentary = () => {
  const [comentaryText, setCommentaryText] = useState('');
  const [CreateCommentaries] = useMutation(CREATE_COMMENTARIES);

  const userId = 'cl7gt2uy00071xcum1u3ry9rs';
  const submit = async (e: SyntheticEvent) => {
    const destinationId = 'cl7gx2x120026h8uz3qvhqis6';
    e.preventDefault();
    await CreateCommentaries({
      variables: {
        comentaryText: comentaryText,
        destinationId: destinationId,
        userId: userId,
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
        className='border-2 bg-gray-200 rounded-md p-2'
      />
      <button
        type='submit'
        className='border-2 ml-4 w-8 h-8 rounded-full bg-black'
        onClick={submit}
      />
      <div>createCommentary</div>
    </>
  );
};

export default createCommentary;
