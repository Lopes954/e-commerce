import Button from './Button';
import Image from 'next/image';
// import Pokemon from './Pokemon';

    

const Card = ({ title, price, description , pokemon ,index }) => {
    const pokeIndex = ('000' + index + 1).slice(-3)
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
      
    <div>
     <Image
       width={150}
       height={150}
       src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokeIndex}.png`}
      ></Image>
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
