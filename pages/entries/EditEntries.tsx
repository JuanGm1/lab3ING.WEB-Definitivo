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
    <div className='m-auto'>
      <div className='max-w-sm rounded-xl flex flex-col overflow-hidden shadow-lg m-4 border-blue-100 border-2 bg-blue-50'>
        <div className='px-6 pb-3'>
          <h1 className='font-bold text-xl mb-2 text-blue-200'>Entry</h1>
          <input
            value={amount}
            name='Amount'
            placeholder='Amount'
            onChange={e => setAmount(e.target.value)}
          />
          <br />
          <span className='font-bold text-xl mb-2 text-blue-200'>
            Type of entry:
          </span>
          <br />
          <select onChange={e => setCategory(e.target.value)}>
            <option>Food</option>
            <option>Entretaiment</option>
            <option>Transportation</option>
            <option>Shopping</option>
          </select>
          <br />
          <button
            type='submit'
            className='bg-blue-200 hover:bg-blue-700 text-white font-bold mr-3 py-2 px-4 mt-3 rounded'
            onClick={editE}
          >
            Edit entry
          </button>
          <button
            type='submit'
            className='bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded'
            onClick={deleteE}
          >
            Delete entry
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEntries;
