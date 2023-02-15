import Hero from '../components/hero';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout
      title="Inicio"
      description="Porcinos FC, equipo de la Kingsleague mostrado en twitch, dueño Ibai Llanos"
    >
      <main className="container mx-auto">
        <Hero />
      </main>
    </Layout>
  );
}
