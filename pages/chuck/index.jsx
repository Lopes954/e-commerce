import { useState, useEffect } from 'react';
import chuckApi from '../../src/service/routes/chuckApi';

export default function Chuck() {
  const [chuckCitation, setChuckCitation] = useState('');

  useEffect(() => {
    const getCitation = async () => {
      const data = await chuckApi.getRandomChuckCitation();

    //  console.log(data.value);
      if (data !== []) {
        setChuckCitation(data.value);
      }
      
    };
    getCitation();
    // console.log(chuckCitation);

  }, []);

  return (
    <div className="citation">
     {chuckCitation !== '' ? chuckCitation : "test"}
    </div>
  );
}
