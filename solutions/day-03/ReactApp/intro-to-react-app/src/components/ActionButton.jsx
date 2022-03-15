let SayHi = (ActionProps) => {
  return (
    <button
      className="button margin button--submit"
      onClick={ActionProps.action}
    >
      {ActionProps.text}
    </button>
  );
};

export default SayHi;