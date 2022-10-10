import { Footer } from '@components/footer';
import { Header } from '@components/header';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';

export const InitialPage = () => (
  <>
    <Header />
    <div className='text-center text-blue-200 font-bold text-3xl py-4'>
      Gestiona tu viaje
    </div>
    <div className='header flex justify-center w-full pb-6'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg m-4 bg-blue-50'>
        <div className='px-6 py-4'>
          <img src='/travel.jpg' alt='travel' width='200' height='200' />
          <div className='font-bold text-xl mb-2 text-blue-200'>
            <p className='pt-2'>Viaje</p>
          </div>
          <p className='text-blue-200'>
            Crear un <Link href='/travel/CreateTravel'><span className='underline'>viaje</span></Link>
          </p>
          <p className='text-blue-200'>
            Editar un <Link href='/travel/EditTravel'><span className='underline'>viaje</span></Link>
          </p>
          <p className='text-blue-200'>
            Agregar un <Link href='/travel/addUser'><span className='underline'>usuario</span></Link>
          </p>
          <p className='text-blue-200'>
            Ver <Link href='/travel/travel'><span className='underline'>viaje</span></Link>
          </p>
        </div>
      </div>
      <div className='max-w-sm rounded overflow-hidden shadow-lg m-4 bg-blue-50'>
        <div className='px-6 py-4'>
          <img src='/travel.jpg' alt='travel' width='200' height='200' />
          <div className='font-bold text-xl mb-2 text-blue-200'>
            <p className='pt-2'>Actividad</p>
          </div>
          <p className='text-blue-200'>
            Crear una <Link href='/activities/CreateActivities'>actividad</Link>
          </p>
        </div>
      </div>
      <div className='max-w-sm rounded overflow-hidden shadow-lg m-4 bg-blue-50'>
        <div className='px-6 py-4'>
          <img src='/travel.jpg' alt='travel' width='200' height='200' />
          <div className='font-bold text-xl mb-2 text-blue-200'>
            <p className='pt-2'>Presupuesto</p>
          </div>
          <p className='text-blue-200'>
            Crear una <Link href='/activities/CreateEntries'>entrada</Link>
          </p>
          <p className='text-blue-200'>
            Editar una <Link href='/activities/EditEntries'>entrada</Link>
          </p>
        </div>
      </div>
      <div className='max-w-sm rounded overflow-hidden shadow-lg m-4 bg-blue-50'>
        <div className='px-6 py-4'>
          <img src='/travel.jpg' alt='travel' width='200' height='200' />
          <div className='font-bold text-xl mb-2 text-blue-200'>
            <p className='pt-2'>Destino</p>
          </div>
          <p className='text-blue-200'>
            Crear un <Link href='/destination/CreateDestination'>destino</Link>
          </p>
          <p className='text-blue-200'>
            Editar un <Link href='/destination/EditDestination'>destino</Link>
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
