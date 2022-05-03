const CountryOptions = [
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

  const selectOptions = CountryOptions.map(({ value, label }) => (
    <option key={value} value={value}>
      {label}
    </option>
  ));

  export { CountryOptions, selectOptions };