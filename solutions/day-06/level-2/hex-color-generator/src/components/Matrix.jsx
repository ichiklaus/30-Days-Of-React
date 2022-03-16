let Matrix = ({ hexColors }) => {
  const hexColorsgrid = hexColors.map((color) => (
    <div key={color} className={`slot`} id={`hex-#${color}`} style={{backgroundColor: `${color}`}}>
      <p>{color}</p>
    </div>
  ));
  return <div className="grid-container">{hexColorsgrid}</div>;
};

export default Matrix;
