function CountryDescription({ country: { name, city } }) {
  return (
    <div id="country-city-block">
      <h3>{name}</h3>
      <small>{`${name}'s capital city is ${city}.`}</small>
    </div>
  );
}

export default CountryDescription;
