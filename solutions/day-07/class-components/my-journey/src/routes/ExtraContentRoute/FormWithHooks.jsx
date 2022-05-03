import React, { useState, useRef } from "react";

import { selectOptions } from "../../utils/CountryOptions";

const FormWithHooks = (props) => {
  //   const [firstname, setFirstname] = useState("");
  const initialState = {
    firstname: "",
    lastname: "",
    country: "",
    title: "",
    touched: {
      firstname: false,
      lastname: false,
    },
  };
  const [formData, setFormData] = useState(initialState);

  const firstnameRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
    console.log(formData);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const onBlur = (event) => {
    const { name } = event.target;
    setFormData({
      ...FormData,
      touched: { ...FormData.touched, [name]: true },
    });
  };

  const validate = () => {
    const errors = {
      firstname: "",
    };

    if (
      (formData.touched.firstname && formData.firstname.length < 3) ||
      (formData.touched.firstname && formData.firstname.length > 12)
    ) {
      errors.firstname = "Firstname must be between 2 and 12 characters";
    }
    return errors;
  };

  const { firstname, lastname, country, title } = formData;

  return (
    <div className="main-wrapper">
      <div className="paragraph">
        <h4>## Day-22</h4>
        <div className="form-wrapper">
          <form className="form-day-11" onSubmit={onSubmit} autoComplete="off">
            <div className="form-group">
              <label htmlFor="firstname">First Name: </label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                autoComplete="none"
                list="autocompleteOff"
                placeholder="First Name"
                value={firstname}
                onChange={handleChange}
                onBlur={onBlur}
              />
              <p className="text-white"> {firstname} </p>
              {/* { errorMessage && <small> {errorMessage} </small> } */}
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name: </label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                autoComplete="none"
                list="autocompleteOff"
                placeholder="Last Name"
                value={lastname}
                onChange={handleChange}
              />
              <p className="text-white"> {lastname} </p>
            </div>
            <div className="form-group">
              <label htmlFor="country">Country: </label>
              <select
                name="country"
                id="country"
                value={country}
                onChange={handleChange}
              >
                {selectOptions}
              </select>
              <p className="text-white"> {country} </p>
            </div>
            <div className="form-group">
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                name="title"
                id="title"
                autoComplete="none"
                list="autocompleteOff"
                placeholder="Title"
                value={title}
                onChange={handleChange}
              />
              <p className="text-white"> {title} </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormWithHooks;
