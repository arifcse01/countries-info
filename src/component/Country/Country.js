import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
    // console.log(props.country)
    const {name, capital, flag} = props.country;
    return (
        <div className="col-md-4">
            <div className="country">
            <img src={flag} alt=""/>
            <h3>{name}</h3>
            <h5>Capital: {capital}</h5>
            <Link to={`/country/${name}`}><button className="btn btn-info mt-3">Show Details</button></Link>
            </div>
        </div>
    );
};

export default Country;