import Button from '../../components/Button';

const Card = ({ name, id }) => {
  const addCheckout = () => {
    console.log('ajout panier');
    console.log(name);
  };

  const buy = () => {
    console.log('achat');
  };

  return (
    <article className="card-pokedex">
      <h1 className="card-title">
        {id} - {name}
      </h1>

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
