import { FaRegUser } from 'react-icons/fa';

export const Header = () => (
  <div className='header flex  w-full bg-blue-200 text-white'>
    <img src='/logo.png' alt='travel' width='60' height='20' />
    <p className='mt-6'>Travel Planer</p>
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
