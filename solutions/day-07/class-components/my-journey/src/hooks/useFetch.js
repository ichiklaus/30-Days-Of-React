import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      const COUNTRIES_URL = url;
      try {
        const response = await axios.get(COUNTRIES_URL);
        const data = response.data;
        setCountryData(data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchCountryData();
  }, [url]);

  return countryData;
};

export default useFetch;
