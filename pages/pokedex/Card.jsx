import Button from '../../components/Button';
import Link from 'next/link';
import PokemonInfo from './PokemonInfo';

const Card = ({ name, id }) => {
  const addCheckout = () => {
    console.log('ajout panier');
  };

  const buy = () => {
    console.log('achat');
  };

  return (
    <article className="card">
      <h1 className="card-title">
        {id} - {name.toUpperCase()}
      </h1>

      {/* <Link>
        <PokemonInfo id={id}/>
      </Link> */}

      <Button
        label="ajouter au panier "
        onClick={addCheckout}
        classList="btn-cart"
      />
      <Button label="acheter" onClick={buy} classList="btn-cart" />
    </article>
  );
};

export default Card;
