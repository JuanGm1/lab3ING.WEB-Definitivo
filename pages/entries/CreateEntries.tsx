import { NextPage } from 'next/types';
import { useMutation } from '@apollo/client';
import { SyntheticEvent, useState } from 'react';
import { CREATE_ENTRIES } from '@graphql/client/entries/mutation/entries';
import { Header } from '@components/header';
import { Footer } from '@components/footer';
import { mdiConsoleLine } from '@mdi/js';
import { log } from 'console';

// interface CreateEntryProps {
//   idBudget: string;
// }

const CreateEntries: NextPage = (/*{ idBudget }: CreateEntryProps*/) => {
  const budgetId = 'cl7phqn8e0127dcumn0hqd9ef';
  const [createEntries] = useMutation(CREATE_ENTRIES);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('food');

  const createEntry = async (e: SyntheticEvent) => {
    const amountFloat = parseFloat(amount);
    await createEntries({
      variables: {
        amount: amountFloat,
        budgetId: budgetId,
        category: category,
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
            type='number'
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
            className='bg-blue-200 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-3 rounded'
            onClick={createEntry}
          >
            Create entry
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEntries;
