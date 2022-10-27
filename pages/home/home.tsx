import { Footer } from '@components/footer';
import { Header } from '@components/header';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import {
  FaRegCalendarAlt,
  FaRegEdit,
  FaUserPlus,
  FaSearch,
} from 'react-icons/fa';

const InitialPage = () => (
  <>
    <Header />
    <div className='text-center text-blue-200 font-bold text-3xl py-4'>
      Gestiona tu viaje
    </div>
    <div className='header flex justify-center w-full pb-6'>
      <div className='max-w-sm rounded-xl overflow-hidden shadow-lg m-4 border-blue-100 border-2 bg-blue-50'>
        <div className='px-6 pb-3'>
          <div className='font-bold text-xl mb-2 text-blue-200'>
            <p className='pt-2'>Viaje</p>
          </div>
          <img
            src='/travel.jpg'
            alt='travel'
            width='200'
            height='200'
            className='mb-2 rounded-xl '
          />
          <p className='text-blue-200'>
            <span className='italic flex gap-2'>
              <FaSearch className='mt-1' />
              <Link href='/travel/travel'>Ver viaje</Link>
            </span>
          </p>
          <p className='text-blue-200'>
            <span className='italic flex gap-2'>
              <FaRegCalendarAlt className='mt-1' />
              <Link href='/travel/CreateTravel'>Crear un viaje</Link>
            </span>
          </p>
          <p className='text-blue-200'>
            <span className='italic flex gap-2'>
              <FaRegEdit className='mt-1' />
              <Link href='/travel/EditTravel/'>Editar un viaje</Link>
            </span>
          </p>
          <p className='text-blue-200'>
            <span className='italic flex gap-2'>
              <FaUserPlus className='mt-1' />
              <Link href='/travel/addUser'>Agregar un usuario</Link>
            </span>
          </p>
        </div>
      </div>
      <div className='max-w-sm rounded-xl overflow-hidden shadow-lg m-4 border-blue-100 border-2 bg-blue-50'>
        <div className='px-6 pb-3'>
          <div className='font-bold text-xl mb-2 text-blue-200'>
            <p className='pt-2'>Actividad</p>
          </div>
          <img
            src='/travel.jpg'
            alt='travel'
            width='200'
            height='200'
            className='mb-2 rounded-xl '
          />
          <p className='text-blue-200'>
            <span className='italic flex gap-2'>
              <FaRegCalendarAlt className='mt-1' />
              <Link href='/activities/CreateActivities'>
                Crear una actividad
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className='max-w-sm rounded-xl overflow-hidden shadow-lg m-4 border-blue-100 border-2 bg-blue-50'>
        <div className='px-6 pb-3'>
          <div className='font-bold text-xl mb-2 text-blue-200'>
            <p className='pt-2'>Presupuesto</p>
          </div>
          <img
            src='/travel.jpg'
            alt='travel'
            width='200'
            height='200'
            className='mb-2 rounded-xl '
          />
          <p className='text-blue-200'>
            <span className='italic flex gap-2'>
              <FaRegCalendarAlt className='mt-1' />
              <Link href='/activities/CreateEntries'>Crear una entrada</Link>
            </span>
          </p>
          <p className='text-blue-200'>
            <span className='italic flex gap-2'>
              <FaRegEdit className='mt-1' />
              <Link href='/activities/EditEntries'>Editar una entrada</Link>
            </span>
          </p>
        </div>
      </div>
      <div className='max-w-sm rounded-xl overflow-hidden shadow-lg m-4 border-blue-100 border-2 bg-blue-50'>
        <div className='px-6 pb-3'>
          <div className='font-bold text-xl mb-2 text-blue-200'>
            <p className='pt-2'>Destino</p>
          </div>
          <img
            src='/travel.jpg'
            alt='travel'
            width='200'
            height='200'
            className='mb-2 rounded-xl '
          />
          <p className='text-blue-200'>
            <span className='italic flex gap-2'>
              <FaRegCalendarAlt className='mt-1' />
              <Link href='/destination/CreateDestination'>
                Crear un destino
              </Link>
            </span>
          </p>
          <p className='text-blue-200'>
            <span className='italic flex gap-2'>
              <FaRegEdit className='mt-1' />
              <Link href='/destination/EditDestination'>Editar un destino</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default InitialPage;

