import { NextPage } from 'next/types';
import { useMutation, useQuery } from '@apollo/client';
import { SyntheticEvent, useEffect, useState } from 'react';
import CREATE_TRAVEL from '@graphql/client/users/mutations/travels';

const Travel: NextPage = () => {
  const [createTravel] = useMutation(CREATE_TRAVEL);
  const [name,setName]=useState("");
  const [startDate,setStartDate]=useState("");
  const [endDate,setEndDate]=useState("");



  const call = async (e: SyntheticEvent) => {

    e.preventDefault();
  
    await createTravel({
      variables: {
        name:name ,
        startDate: startDate,
        endDate: endDate,
      },
    });
  };

  return (
    <div>
      <form onSubmit={call}>
        <h1>Travel</h1>
        <input value={name}   name="firstName" onChange={e => setName(e.target.value)} />

        <span>Fecha Inicio: </span>
        <input placeholder='Fecha inicio' name='startDate' type='date' value={startDate} onChange={e => setStartDate(e.target.value)}/>
        <input placeholder='Fecha fin' name='endDate' type='date'value={endDate} onChange={e => setEndDate(e.target.value)}/>
        <button type='submit' className='border-2 ml-4'>
          enviar
        </button>
      </form>
    </div>
  );
};

export default Travel;
