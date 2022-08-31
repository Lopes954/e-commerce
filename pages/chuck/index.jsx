import CardChuck from './CardChuck';

export default function Chuck() {
  // for (let i = 0; i <= 25; i++) {
  //   console.log('michel'+i);
  // }

  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {numbers.map((number, iteration) => (
        <CardChuck key={iteration} classMichel="card-chuck" />
      ))}
    </div>
  );
}
