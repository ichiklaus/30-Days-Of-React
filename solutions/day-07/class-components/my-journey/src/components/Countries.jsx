import React, { Component } from "react";

export default class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "Nicolás",
      data: [],
    };
  }

  componentDidMount() {
    const API_URL = "https://restcountries.com/v2/all";
    fetch(API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        this.setState({
          data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //   .slice(0, 5).map
  renderCountries = () => {
    return this.state.data.map((country, index) => {
      return (
        index < 5 && (
          <div className="mt-5" key={country.name}>
            <div className="img-container">
              <img
                className="img-element"
                src={country.flag}
                alt={country.name}
              />
            </div>
            <div>
              <h3>{country.name}</h3>
              <p>Population: {country.population}.</p>
            </div>
          </div>
        )
      );
    });
  };

  render() {
    return (
      <div className="country-wrapper paragraph">
        <h2>Country API calling</h2>
        <div>
          <p>
            There are {this.state.data.length} Countries in the API. Displaying
            only 5.
          </p>
          <div className="countries-container">{this.renderCountries()}</div>
        </div>
      </div>
    );
  }
}
