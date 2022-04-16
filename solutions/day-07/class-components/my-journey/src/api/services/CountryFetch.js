import React, { Component } from "react";
import { CountriesComponent } from "../../components/CountryComponent";


export default class CountryFetch extends Component {
  state = {
    data: [],
  };

  // fetching using promise
  fetchCountryData() {
    const url = "https://restcountries.com/v2/all";
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // fetching usin async, await
  asyncFetchCountryData = async () => {
    try {
      const URL = "https://restcountries.com/v2/all";
      const RESPONSE = await fetch(URL);
      const DATA = await RESPONSE.json();
      this.setState({
        data: DATA,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  componentDidMount() {
    // this.fetchCountryData();
    this.asyncFetchCountryData();
  }

  render() {
    return (
      <div className="App">
        {/* <h1 className="intro-title">React Component Life Cycle</h1> */}
        <p>Calling API using fetch()</p>
        <div>
          <p>There are {this.state.data.length} countries in the API.</p>
          <div className="countries-wrapper">
            {this.state.data.map(
              (country, index) =>
                index < 8 && <CountriesComponent key={country.name} country={country} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
