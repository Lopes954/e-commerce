import { useState, useEffect } from 'react';
import chuckApi from '../../src/service/routes/chuckApi';

export default function Chuck() {
  const [chuckCitation, setChuckCitation] = useState('');

  useEffect(() => {
    const getCitation = async () => {
      const data = await chuckApi.getRandomChuckCitation;

      if (data !== []) {
        setChuckCitation(data.value);
      }
      
    };
    getCitation();
  }, []);

  return (
    <div className="pokedex">
     {chuckCitation !== ''? chuckCitation : "test"}
    </div>
  );
}
