import Link from "next/link";

export default function NavBar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#f5f5f5", marginBottom: "2rem" }}>
      <Link href="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link href="/blog" style={{ marginRight: "1rem" }}>Blog</Link>
      <Link href="/contacto">Contacto</Link>
    </nav>
  );
}
