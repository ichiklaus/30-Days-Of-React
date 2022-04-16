import axios from "axios";
import React, { Component } from "react";

function HOCCountry(CountryComponent, requestURL, type) {
  return class extends Component {
    state = {
      data: [],
    };

    witchFetch = async (requestURL) => {
      try {
        const RESPONSE = await fetch(requestURL);
        const DATA = await RESPONSE.json();
        this.setState({
          data: DATA,
        });
      } catch (error) {
        console.log(error.message);
      }
    };

    withAxios = async (requestURL) => {
      // With async - await
      try {
        const RESPONSE = await axios.get(requestURL);
        const DATA = RESPONSE.data;
        console.log(DATA);
        this.setState({
          data: DATA,
        });
      } catch (error) {
        console.log(error.message);
      }
      // with Promises
      // axios
      //   .get(requestURL)
      //   .then((response) => {
      //     this.setState({
      //       data: response.data,
      //     });
      //   })
      //   .catch((error) => {
      //     console.log(error.message);
      //   });
    };

    componentDidMount() {
      if (type === "fetch") {
      this.witchFetch(requestURL);
      } else if (type === "axios") {
      this.withAxios(requestURL);
      }
    }

    render() {
      return (
        <div>
          {/* <h1 className="intro-title">React Component Life Cycle</h1> */}
          { type === "fetch" && <h3 className="intro-second-title">Calling API using fetch()</h3>}
          { type === "axios" && <h3 className="intro-second-title">Calling API using axios()</h3>}
          <div>
            <p>There are {this.state.data.length} countries in the API.</p>
            <div className="grid-container g70">
              <div className="countries-wrapper grid-auto-fill space-2 flex">
                {this.state.data.map(
                  (country, index) =>
                    index < 3 && (
                      <CountryComponent
                        {...this.props}
                        key={country.name}
                        country={country}
                        data={this.state.data}
                      />
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
}

export default HOCCountry;
