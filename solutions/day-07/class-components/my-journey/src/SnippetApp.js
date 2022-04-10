
import React, { Component } from 'react';

class User extends Component {
  state = {
    firstName: "Nicolas",
    day: 1,
    congratulate: "",
  }


  /**
  * Snippet code for getDerivedStateFromProps
  */
  // static getDerivedStateFromProps(props, state) {
  //   console.log(
  //     'I am getDerivedStateFromProps and I will be the second to run.'
  //   )
  //   return { firstName: props.firstName } // Returning (overwritting) the value of props into the value of state.
  // }

  /**
   * Snippet code for componentDidMount
   */
  // changeName = () => {
  //   console.log('I am componentDidMount and I will be last to run.')
  //   setTimeout(() => {
  //     this.setState({
  //       firstName: "Gabriela Sancán",
  //     });
  //   }, 1000);
  // }
  // componentDidMount() {
  //   if(this.shouldComponentUpdate) {
  //     this.changeName();
  //   }
  // }

  /**
  * Snippet code for shouldComponentUpdate
  */
  // shouldComponentUpdate = (nextProp, nextState) => {
  //   console.log(nextProp, nextState);
  //   if (nextProp === nextState) {
  //     return false;
  //   }
  //   return true;
  // }
  shouldComponentUpdate = (nextProp, nextState) => {
    // console.log("Next state and props: ", nextProp, nextState);
    console.log("Current day: ", nextState.day);
    if (nextState.day > 31) {
      return false
    } else {
      return true;
    }
  }
  doChallenge = () => {
    this.setState({
      day: this.state.day + 1
    });
  }

  /**
     * Snippet code for componentDidUpdate
  */
  componentDidUpdate = (prevProp, prevState) => {
    if (prevState.day === 30) {
      this.setState({
        congratulate: "Congratulations, you reached the milestone!",
      });
    };
  }

  render() {
    return (<div>
      {/* <h1>{this.props.firstName}</h1> */}
      {/* As seen, it returns the value of props (John) coming from User's prop definition in App component */}
      <h1>{this.state.firstName}</h1> {/* The value of User.state is overwritten with the value coming from the props */}
      <p>Day: {this.state.day}</p>
      <button type='submit' onClick={this.doChallenge}>Increase day</button>
      {this.state.congratulate && <p>{this.state.congratulate}</p>}
    </div>
    )
  }
}
export default class App extends Component {
  state = {
    firstName: 'John',
  }

  render() {
    return (
      <div className='App'>
        <User firstName={this.state.firstName} /> {/* We assign the value of firstname: John from this.state into the props for the User class component */}
      </div>
    )
  }
}


// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     console.log('I am  the constructor and  I will be the first to run.')
//     this.state = {
//       firstName: 'John',
//       data: [],
//     }
//   }

//   componentDidMount() {
//     console.log('I am componentDidMount and I will be last to run.')
//     const API_URL = 'https://restcountries.eu/v2/all'
//     fetch(API_URL)
//       .then((response) => {
//         return response.json()
//       })
//       .then((data) => {
//         console.log(data)
//         this.setState({
//           data,
//         })
//       })
//       .catch((error) => {
//         console.log(error)
//       })
//   }
//   renderCountries = () => {
//     return this.state.data.map((country) => {
//       return (
//         <div>
//           <div>
//             {' '}
//             <img src={country.flag} alt={country.name} />{' '}
//           </div>
//           <div>
//             <h1>{country.name}</h1>
//             <p>Population: {country.population}</p>
//           </div>
//         </div>
//       )
//     })
//   }

//   render() {
//     return (
//       <div className='App'>
//         <h1>React Component Life Cycle</h1>
//         <h1>Calling API</h1>
//         <div>
//           <p>There are {this.state.data.length} countries in the api</p>
//           <div className='countries-wrapper'>{this.renderCountries()}</div>
//         </div>
//       </div>
//     )
//   }
// }