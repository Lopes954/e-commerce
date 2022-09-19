import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav >
      <Link  href="/">
        <a className={`navbar-item ${router.pathname == "/" ? "is-active"  : ""}`} >
          HOME</a>
      </Link>
      <Link  href="/pokedex">
        <a className={`navbar-item ${router.pathname == "/pokedex" ? "is-active"  : ""}`} >
          Pokedex</a>
      </Link>
      <Link href="/about">
        <a className={`navbar-item ${router.pathname == "/about" ? "is-active"  : ""}`}>
        A propos</a>
      </Link>
      <Link href="/chuck">
        <a className={`navbar-item ${router.pathname == "/chuck" ? "is-active"  : ""}`}
        >Chuck-Noris</a>
      </Link>
      <Link href="/">
        <a className={`navbar-item ${router.pathname == "/" ? "is-active"  : ""}`}
        >toupis</a>
      </Link>
      
    </nav>
  );
}
