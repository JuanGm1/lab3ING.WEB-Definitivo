import { NextPage } from 'next/types';
import { useMutation, useQuery } from '@apollo/client';
import { SyntheticEvent, useEffect, useState } from 'react';
import {UPDATE_TRAVEL} from '@graphql/client/travels/mutations/travels';
import GET_TRAVEL from '@graphql/client/travels/queries/travels';
const EditTravel: NextPage = ({id}) => {
    const travelId=id;
  const [updateTravel] = useMutation(UPDATE_TRAVEL);

  const [name,setName]=useState("");
  const [startDate,setStartDate]=useState("");
  const [endDate,setEndDate]=useState("");

  const travel= useQuery(GET_TRAVEL,{
    variables:{
        getTravelId:travelId,
    },fetchPolicy:'cache-and-network',
}); 

  useEffect(()=>{

console.log(travel)

  },[travelId])

  const call = async (e: SyntheticEvent) => {

    e.preventDefault();
  
    await updateTravel({
      variables: {
        id:travelId,
        name:name ,
        startDate: startDate,
        endDate: endDate,
      },
    });
  };

  return (
    <div>
    
        <h1>Travel</h1>
        <input value={name}   name="firstName" onChange={e => setName(e.target.value)} />
        <span>Fecha Inicio: </span>
        <input placeholder='Fecha inicio' name='startDate' type='date' value={startDate} onChange={e => setStartDate(e.target.value)}/>
        <input placeholder='Fecha fin' name='endDate' type='date'value={endDate} onChange={e => setEndDate(e.target.value)}/>
        <button type='submit' className='border-2 ml-4' onClick={call}>
          enviar
        </button>
    
    </div>
  );
};

export default EditTravel;
