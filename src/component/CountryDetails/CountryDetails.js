import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetails.css';

const CountryDetails = () => {    
    const {countryName} = useParams();
    const [country, setCountry] = useState([]);
    const {capital, flag, population, region, nativeName} = country;
    console.log(country)
    useEffect(() =>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]));       
    }, [])
    return (
        <div>
            <h2 className="mt-5 mb-4">Country Information</h2>
            <div className="country-details">
                <img src={flag} alt=""/>
                <h3>{countryName}</h3>                
                <h5>Capital: {capital}</h5>
                <p>Native Name: {nativeName}</p>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
            </div>
        </div>
    );
};

export default CountryDetails;