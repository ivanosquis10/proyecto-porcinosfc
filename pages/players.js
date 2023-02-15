import Layout from '../components/layout';

export default function Players() {
  return (
    <>
      <Layout
        title="Jugadores"
        description="Porcinos FC presidente y dueño Ibai Llanos, equipo de futbol twitch Kingsleague, jugadores del equipo"
      >
        <section className="container mx-auto">
          <h2>Jugadores</h2>
          <ul>
            <li>Ibai</li>
            <li>Cichero</li>
            <li>Segovia</li>
          </ul>
        </section>
      </Layout>
    </>
  );
}
