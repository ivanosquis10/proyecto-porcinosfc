import Image from 'next/image';
import Link from 'next/link';

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
    <header className="font-extrabold border w-full flex items-center justify-between mt-2 px-2">
      {/* Logo PorcinosFC */}
      <div>
        <Link href={'/'}>
          <img
            width="120px"
            heght="120px"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Porcinos_FC.svg/600px-Porcinos_FC.svg.png"
            alt="hola"
          />
        </Link>
      </div>
      <nav className="flex gap-2">
        <Link href={'/'}>Home</Link>
        <Link href={'/players'} legacyBehavior>
          <a className=""> Players </a>
        </Link>
        <Link href={'/players'} legacyBehavior>
          <a className=""> President </a>
        </Link>
      </nav>
    </header>
  );
}
