import Button from '../../components/Button';

const Card = ({ title, price, description, pokemon, index }) => {
  const pokeIndex = ('000' + index + 1).slice(-3);

  const addCheckout = () => {
    console.log('ajout panier');
  };

  const buy = () => {
    console.log('achat');
  };

  return (
    <article className="card">
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>

      <div className="img">
        <img
          width="250"
          height="250"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndex}.png`}
          alt=""
        />
      </div>

      <h2 className="card-price">{price}</h2>

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
