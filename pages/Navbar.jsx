import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <Link  href="/">
        <a  className='item-nav' href="">HOME</a>
      </Link>
      <Link  href="/pokedex">
        <a className='item-nav' href="">Pokedex</a>
      </Link>
      <Link href="/about">
        <a className='item-nav' href="">A propos</a>
      </Link>
      <Link href="/chuck">
        <a className='item-nav' href="">Chuck-Noris</a>
      </Link>
    </nav>
  );
}
