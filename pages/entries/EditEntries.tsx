import { NextPage } from 'next/types';
import { useMutation, useQuery } from '@apollo/client';
import { SyntheticEvent, useEffect, useState } from 'react';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import {
  DELETE_ENTRY,
  UPDATE_ENTRY,
} from '@graphql/client/entries/mutation/entries';
import { GET_ENTRY } from '@graphql/client/entries/queries/entries';

interface EditEntriesProps {
  id: string;
}

const EditEntries = ({ id }: EditEntriesProps) => {
  const entryId = 'cl8tmh1a2000duzookg8uw9q9';
  const [deleteEntry] = useMutation(DELETE_ENTRY);
  const [UpdateEntry] = useMutation(UPDATE_ENTRY);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('food');
  const [entry, setEntry] = useState([]);
  const { data, loading } = useQuery(GET_ENTRY, {
    variables: {
      getEntryId: entryId,
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (data != null || !loading) {
      setAmount(data.getEntry.amount);
      setCategory(data.getEntry.category);
      setEntry(data);
    }
  }, [data]);


  const editE = async (e: SyntheticEvent) => {
    e.preventDefault();
    const amountFloat = parseFloat(amount);
    await UpdateEntry({
      variables: {
        updateEntryId: entryId,
        amount: amountFloat,
        category: category,
      },
    });
  };

  const deleteE = async (e: SyntheticEvent) => {
    e.preventDefault();
    await deleteEntry({
      variables: {
        deleteEntryId: entryId,
      },
    });
  };

  return (
    <>
      <Header />
      <div className='maincontent'>
        <h1>Monto</h1>
        <input
          value={amount}
          name='Monto'
          placeholder='Ingrese monto'
          onChange={e => setAmount(e.target.value)}
        />
        <span>Categoria: </span>
        <select onChange={e => setCategory(e.target.value)}>
          <option>food</option>
          <option>entretaiment</option>
        </select>
        <button type='submit' className='border-2 ml-4' onClick={editE}>
          Actualizar entrada
        </button>
        <button type='submit' className='border-2 ml-4' onClick={deleteE}>
          Eliminar entrada
        </button>
      </div>
      <Footer />
    </>
  );
};

export default EditEntries;
