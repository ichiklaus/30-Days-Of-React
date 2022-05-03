import React, { Component } from "react";

import { selectOptions } from "../utils/CountryOptions";


class FormPP extends Component {
  lastnameRef = React.createRef();

  state = {
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    tel: "",
    birthdate: "",
    favouriteColor: "",
    weight: "",
    gender: "",
    file: "",
    bio: "",
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstname: false,
      lastname: false,
    },
  };

  onChangehandler = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      });
    } else if (type === "file") {
      this.setState({
        [name]: event.target.files[0],
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  onBlurHandler = (event) => {
    const { name } = event.target;
    this.setState({
      touched: { ...this.state.touched, [name]: true },
    });
    console.log(event.target);
  };

  validate = () => {
    // Object to collect error feedback and to display on the form
    const errors = {
      firstName: "",
    };

    if (
      (this.state.touched.firstname && this.state.firstname.length < 3) ||
      (this.state.touched.firstname && this.state.firstname.length > 12)
    ) {
      errors.firstName = "First name must be between 2 and 12";
    }
    return errors;
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const {
      firstname,
      lastname,
      email,
      tel,
      birthdate,
      favouriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = this.state;

    const formattedSkills = [];
    for (const key in skills) {
      console.log(key);
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase);
      }
    }

    const data = {
      firstname,
      lastname,
      email,
      tel,
      birthdate,
      favouriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills,
    };
    console.log(data);
    console.log(this.validate());
    console.log(
      `status of createRef for lastname: ${this.lastnameRef.current.value}`
    );
  };

  render() {
    const {
      firstname,
      lastname,
      email,
      tel,
      birthdate,
      favouriteColor,
      weight,
      country,
      gender,
      bio,
    } = this.state;

    return (
      <div className="flex paragraph">
        <div className="form-wrapper">
          <h3>Add student</h3>
          <form className="form-day-11" onSubmit={this.onSubmitHandler}>
            <div className="form-group">
              {/* Input text for Firstname */}
              <label htmlFor="firstname">Firstname</label>
              <input
                type="text"
                name="firstname"
                id=""
                value={firstname}
                onChange={this.onChangehandler}
                onBlur={this.onBlurHandler}
                placeholder={"Firstname"}
              />
            </div>
            {/* Input text for lastname */}
            <div className="form-group">
              <label htmlFor="lastname">Lastname</label>
              <input
                type="text"
                name="lastname"
                id=""
                value={lastname}
                onChange={this.onChangehandler}
                // onBlur={this.onBlurHandler}
                ref={this.lastnameRef}
                placeholder={"Lastname"}
              />
            </div>
            {/* Input email for email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                value={email}
                onChange={this.onChangehandler}
                placeholder={"Email"}
              />
            </div>
            {/* Input tel for telephone */}
            <div className="form-group">
              <label htmlFor="tel">Telephone</label>
              <input
                type="tel"
                name="tel"
                id=""
                value={tel}
                onChange={this.onChangehandler}
                placeholder={"Telephone"}
              />
            </div>
            {/* Input date for date of birth */}
            <div className="form-group">
              <label htmlFor="birthdate">Date of birth</label>
              <input
                type="date"
                name="birthdate"
                id=""
                value={birthdate}
                onChange={this.onChangehandler}
                placeholder={"Date of birth"}
              />
            </div>
            {/* Input number for weight */}
            <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input
                type="number"
                name="weight"
                id=""
                value={weight}
                onChange={this.onChangehandler}
                placeholder={"Weight"}
              />
            </div>
            {/* Input color for favourite colour */}
            <div className="form-group">
              <label htmlFor="favourite-color">Favourite Colour</label>
              <input
                className="fav-color"
                type="color"
                name="favourite-color"
                id="favcolor"
                value={favouriteColor}
                onChange={this.onChangehandler}
                placeholder={"Favourite Colour"}
              />
            </div>
            {/* Select for country selector */}
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select
                className="button button--submit"
                name="country"
                id="country"
                onChange={this.onChangehandler}
              >
                {" "}
                {selectOptions}{" "}
              </select>
            </div>
            {/* Radio button for Gender */}
            <p className="m-top  intro-title">Gender</p>
            <div className="form-group mt-2 gender">
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value={"Female"}
                  onChange={this.onChangehandler}
                  checked={gender === "Female"}
                />
                <label htmlFor="female">Female</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value={"Male"}
                  onChange={this.onChangehandler}
                  checked={gender === "Male"}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value={"Other"}
                  onChange={this.onChangehandler}
                  checked={gender === "Other"}
                />
                <label htmlFor="other">Other</label>
              </div>
            </div>

            {/* Input checkbox for Skills */}
            <p className="m-top white">Select your skills</p>
            <div className="form-group skills">
              <div>
                <input
                  type="checkbox"
                  id="html"
                  name="html"
                  onChange={this.onChangehandler}
                />
                <label htmlFor="html">HTML</label>
              </div>

              <div>
                <input
                  type="checkbox"
                  id="css"
                  name="css"
                  onChange={this.onChangehandler}
                />
                <label htmlFor="css">CSS</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="javascript"
                  name="javascript"
                  onChange={this.onChangehandler}
                />
                <label htmlFor="javascript">JavaScript</label>
              </div>
            </div>

            {/* Input for Biography */}
            <div className="form-group m-top text-area">
              <label htmlFor="bio">Bio</label> <br />
              <textarea
                className=""
                name="bio"
                id="bio"
                rows="10"
                value={bio}
                onChange={this.onChangehandler}
                placeholder={"Write about yourself"}
              ></textarea>
            </div>
            {/* Input for File upload */}
            <div className="form-group mt-3">
              <input
                type="file"
                name="file"
                id="file"
                onChange={this.onChangehandler}
              />
            </div>
            <div>
              <button className="button button--submit mt-3" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormPP;
