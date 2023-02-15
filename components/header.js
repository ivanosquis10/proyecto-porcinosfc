import Image from 'next/image';
import Link from 'next/link';
// import logo from '../public/img/porcinosfc.webp';

export default function Header() {
  /* 
    <Image
            src=""https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Porcinos_FC.svg/600px-Porcinos_FC.svg.png""
            alt="Picture of the author"
            width={150}
            height={150}
            priority
          />

          <img
            width="150px"
            heght="150px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Porcinos_FC.svg/600px-Porcinos_FC.svg.png"
            alt="hola"
          />
  */

  return (
    <header className="mt-3 px-5">
      <nav className="w-full mx-auto flex items-center justify-center gap-5 lg:gap-10 ">
        <Link href={'/players'} legacyBehavior>
          <a className="lg:text-lg font-bold text-white p-1 hover:text-pink-800 ease-in-out duration-200 border-b-2">
            {' '}
            Players{' '}
          </a>
        </Link>

        <Link href={'/'} legacyBehavior>
          <a className="shadow-md hover:shadow-pink-900 rounded-full">
            <Image
              src="/img/porcinosfc.svg"
              alt="Picture of the author"
              width={150}
              height={150}
              priority
            />
          </a>
        </Link>

        <Link href={'/president'} legacyBehavior>
          <a className="lg:text-lg font-bold text-white p-1 hover:text-pink-800 ease-in-out duration-200 border-b-2">
            {' '}
            President{' '}
          </a>
        </Link>
      </nav>
    </header>
  );
}
