import Head from "next/head";
import NavBar from "../components/NavBar";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog de Optimización - Next.js SEO</title>
        <meta name="description" content="Explora artículos sobre optimización web con Next.js" />
        <meta property="og:title" content="Blog Next.js" />
        <meta property="og:description" content="Mejores prácticas para rendimiento y SEO." />
        <meta property="og:image" content="/images/blog-preview.png" />
        <meta property="og:type" content="article" />
      </Head>

      <NavBar />

      <h1>Blog</h1>
      <p>Contenido del blog sobre SEO y optimización...</p>
    </>
  );
}
