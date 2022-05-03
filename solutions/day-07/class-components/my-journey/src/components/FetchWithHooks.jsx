import React, { useState, useEffect } from "react";

import useFetch from "../hooks/useFetch";

const Country = ({
  country: { name, capital, flag, languages, population, currencies },
}) => {
  const formattedCapital =
    capital.length > 0 ? <span>Capital: {capital}</span> : "";

  const formattedLanguage = languages.length > 1 ? `Languages` : `Language`;
  return (
    <div className="country pt-4">
      <div className="img-container">
        <img className="img-element" src={flag} alt={name} />
      </div>
      <h3 className="country-name">{name.toUpperCase()}</h3>
      <div className="country-text">
        <p>{formattedCapital}</p>
        <p>
          <span>{formattedLanguage}: </span>
          {languages.map((language) => language.name).join(", ")}
        </p>
        <p>
          <span>Population: </span>
          {population.toLocaleString()}
        </p>
        <p>
          <span>Currency: </span>
          {currencies[0].name}
        </p>
      </div>
    </div>
  );
};

const FetchedCountry = () => {
  const COUNTRIES_URL = "https://restcountries.com/v2/all";
  const countryData = useFetch(COUNTRIES_URL);

  return (
    <div className="country-app">
      <p>API Fetching with axios and Custom Hooks</p>
      <p>There are {countryData.length} countries in the API</p>
      <div className="grid-container g70">
        <div className="countries-wrapper grid-auto-fill space-2 flex">
          {countryData.map((country, index) => {
            return (
              index < 8 && <Country country={country} key={country.name} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FetchedCountry;
