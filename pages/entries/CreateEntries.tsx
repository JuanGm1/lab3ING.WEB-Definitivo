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
    const amountFloat = parseFloat(amount)
    await createEntries({
      variables: {
        amount: amountFloat,
        budgetId: budgetId,
        category: category,
      },
    });
  };

  return (
    <>
      <Header />
      <div>
        <h1>Entry</h1>
        <input
          value={amount}
          type='number'
          name='Amount'
          placeholder='Ingrese monto'
          onChange={e => setAmount(e.target.value)}
        />
        <select onChange={e => setCategory(e.target.value)}>
          <option>food</option>
          <option>entretaiment</option>
          <option>transportation</option>
          <option>shopping</option>
        </select>
        <button
          type='submit'
          className='btn btn-rounded border-2 ml-4'
          onClick={createEntry}
        >
          enviar
        </button>
      </div>
      <Footer />
    </>
  );
};

export default CreateEntries;
