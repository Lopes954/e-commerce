import { useState,useEffect } from "react";
import chuckApi from "../../src/service/routes/chuckApi";

const CardChuck = ({ classMichel }) => {
  
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
    <article className={classMichel}>

      <h1 className="card-title">{chuckCitation !== '' ? chuckCitation : "test"}</h1>
     
    </article>
  );
};

export default CardChuck;