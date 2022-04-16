export function CountriesComponent ({
  country: { name, capital, flag, languages, population, currencies },
}) {
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
}
