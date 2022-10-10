import { FaAvianex, FaRegUser } from 'react-icons/fa';

export const Header = () => (
  <div className='header flex  w-full bg-blue-200 text-white'>
    <div className='flex-none w-14 h-14'>
      <p>
        <FaAvianex />
        Travel Planer
      </p>
    </div>
    <div className='grow ' />
    <div className='flex-none w-100 h-14 mr-4 mt-4'>
      <button
        type='submit'
        className='border-blue-100  bg-blue-50 text-blue-200 font-bold py-2 px-3 rounded inline-flex items-center'
      >
        <FaRegUser className=' mr-1 ' />
        <p>Login</p>
      </button>
    </div>
  </div>
);
