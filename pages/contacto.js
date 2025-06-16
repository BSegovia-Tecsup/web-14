import Head from "next/head";
import NavBar from "../components/NavBar";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto - Mi Sitio Optimizado</title>
        <meta name="description" content="Ponte en contacto para aprender más sobre Next.js y SEO." />
        <meta property="og:title" content="Contacto Next.js" />
        <meta property="og:description" content="Contáctanos para más información sobre optimización web." />
        <meta property="og:image" content="/images/contacto-preview.png" />
        <meta property="og:type" content="website" />
      </Head>

      <NavBar />

      <h1>Contacto</h1>
      <br></br>
      <p>Telefono: 947299428</p>
      <p>¿Tienes dudas o quieres más info? Escríbeme a: <a href="mailto:correo@ejemplo.com">brayansecundara40028@gmail.com</a></p>
      <br></br>

    </>
  );
}
