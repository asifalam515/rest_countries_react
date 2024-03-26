import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])

  const [visitedCountry,setVisitedCountry]=useState([])
  const handleVisitedCountry=(country)=>{
   setVisitedCountry([...visitedCountry,country])
  }
  const [visitedFlags,setVisitedFlags]=useState([])
  const handleVisitedFlags=(flags)=>{
    console.log(flags);
    setVisitedFlags([...visitedFlags,flags])
  }
// remove item from an array in a state
// user filter to select all the elements except the one you want to remove


    return (
        
        <div >
           <h1>Country found: {countries.length}</h1>
           <div>
           <h2>Total Visited Country: {visitedCountry.length} </h2>
           <ul>
           {
            visitedCountry.map((singleVisitedCountry)=> <li key={singleVisitedCountry.cca3}>{singleVisitedCountry.name.common}</li>)
           }
           </ul>
           {/* flags section started from here */}
           <ul>
            {
                visitedFlags.map((flags,idx)=><li key={idx}><img src={flags} alt="" /></li>)

            }

           </ul>
           </div>

            <div className="country-container">
            {
                countries.map((country)=> <Country handleVisitedCountry={handleVisitedCountry} country={country} handleVisitedFlags={handleVisitedFlags} key={country.cca2}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;