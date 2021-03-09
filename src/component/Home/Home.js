import React from 'react';
import Country from '../Country/Country';
import { useEffect, useState } from 'react';


const Home = () => {
    const [countries, setCountries] = useState([]);
    
  useEffect(() =>{
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])
    return (
        <div>
          <h2 className="mt-5 mb-5">Countries: {countries.length}</h2>
          <div className="container">
            <div className="row">
              {/* <div className="countries"> */}
              {
                countries.map(country => <Country country={country} key={country.alpha2Code}></Country>)
            }  
              {/* </div> */}
            </div>
            
          </div>
        </div>
    );
};

export default Home;