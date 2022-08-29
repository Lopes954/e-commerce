import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a href="">HOME</a>
      </Link>
      <Link href="/pokedex">
        <a href="">Pokedex</a>
      </Link>
      <Link href="/about">
        <a href="">A propos</a>
      </Link>
      <Link href="/contact">
        <a href="">Contact</a>
      </Link>
    </nav>
  );
}
