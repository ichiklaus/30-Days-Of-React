import React, { Component } from "react";

const options = [
  {
    value: "",
    label: "-- Select Country --",
  },
  {
    value: "Finland",
    label: "Finland",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
  {
    value: "Norway",
    label: "Norway",
  },
  {
    value: "Denmark",
    label: "Denmark",
  },
];

const selectOptions = options.map(({ value, label }) => (
  <option value={value}>{label}</option>
));

class FormPP extends Component {
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
              <input className="fav-color"
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
            <p className="m-top white">Gender</p>
            <div className="form-group gender">
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
            <div className="form-group">
              
              <input 
                type="file"
                name="file"
                id="file"
                onChange={this.onChangehandler}
              />
            </div>
            <div>
              <button className="button button--submit" type="submit">
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
