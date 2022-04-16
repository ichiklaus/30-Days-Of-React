import React, { Component } from "react";
import { CountriesComponent } from "../components/CountryComponent";
import HOCCountry from "../components/HOCCountry";

const WithFetch = HOCCountry(
  CountriesComponent,
  "https://restcountries.com/v2/all",
  "fetch"
);
const WithAxios = HOCCountry(
  CountriesComponent,
  "https://restcountries.com/v2/all",
  "axios"
);
export default class DisplayCountry extends Component {
  state = {
    data: [],
  };

  render() {
    return (
        <div>
            <WithFetch />
            <WithAxios />
        </div>
    );
  }
}
