import Image from 'next/image';

export default function Hero() {
  return (
    <section className="container mx-auto mt-10 text-center">
      <h2 className="text-4xl uppercase mb-5">Bienvenido a la Porcineta FC</h2>
      <div className="w-full px-2 border grid items-center justify-center">
        <p className="text-base md:text-lg font-bold">
          Aquí encontrarás información sobre los jugadores de PorcinosFC. Y de
          nuestro gran presidente Ibai Llanos
        </p>
      </div>
    </section>
  );
}
