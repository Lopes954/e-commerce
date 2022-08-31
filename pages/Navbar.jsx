import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav >
      <Link  href="/">
        <a className={router.pathname == "/" ? "is-active"  : "not-active"} >
          HOME</a>
      </Link>
      <Link  href="/pokedex">
        <a className={router.pathname == "/pokedex" ? "is-active"  : "not-active"} >Pokedex</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname == "/about" ? "is-active"  : "not-active"} >A propos</a>
      </Link>
      <Link href="/chuck">
        <a className={router.pathname == "/chuck" ? "is-active"  : "not-active"} >Chuck-Noris</a>
      </Link>
    </nav>
  );
}
