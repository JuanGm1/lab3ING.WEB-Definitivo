import { Footer } from '@components/footer';
import { Header } from '@components/header';
import Link from 'next/link';

export const InitialPage = () => (
  <>
    <Header />
    <div className='header flex w-full'>
      <div>Contenido</div>
      <div className='max-w-sm rounded overflow-hidden shadow-lg m-4 bg-blue-100'>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2 text-white'>
            <Link href='/travel/travel'>Ver viaje</Link>
          </div>
          <p className='text-white text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </>
);
