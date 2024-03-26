import { useState } from 'react';
import './Country.css'

const Country = ({country,handleVisitedCountry,handleVisitedFlags} ) => {
    // console.log(country);
    const [visited,setVisited]=useState(false)
    const handleVisited=()=>{
        setVisited(!visited)
    }
    const {name,flags,population,area,cca3}=country
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h1> {name?.common} </h1>
            <img src={flags.png} alt="" />
            
            <h3>Population: {population}</h3>
            <h6>Area: {area}</h6>
            <p>code: {cca3} </p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark as Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add to Visited Flag</button>
            {/* <button onClick={handleVisited}> {visited?"Visited":"Going"} </button> */}
            {/* {visited ? 'i have visited this country':"I will visit this country"} */}
            
           
        </div>
    );
};

export default Country;