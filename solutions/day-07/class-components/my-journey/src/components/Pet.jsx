import React from "react";

class Pet extends React.Component {
  constructor() {
    super();
    this.state = {
      image:
        "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg",
    };
  }

  changePet = () => {
    let dogUrl = `https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg`;
    let catUrl = `https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg`;
    let image = this.state.image === catUrl ? dogUrl : catUrl;
    this.setState({ image });
  };

  render() {
    return (
      <div className="action-center">
        <h3 className="mt-4">Pet state changer</h3>
        <div className="img-container">
          <img
            src={this.state.image}
            alt="animal pet"
            className="img-element"
          />
        </div>
        <button onClick={this.changePet} className="button button--submit mt-3">
          Change pet
        </button>
      </div>
    );
  }
}

export default Pet;
