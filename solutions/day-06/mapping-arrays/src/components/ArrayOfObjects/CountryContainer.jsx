import CountryDescription from "./CountryDescription";

function CountryContainer({countries}) {
    const countryList = countries.map((country) => <CountryDescription key={country.name} country={country} />);
    return (
        <div id="country-list-container">
            {countryList}
        </div>
    );
}
export default CountryContainer;