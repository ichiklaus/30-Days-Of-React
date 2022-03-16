import { bgColor } from "../services/common";

let Matrix = ({ matrix }) => {
  const grid = matrix.map((number) => (
    <div
      key={number}
      className={`slot ${bgColor(number)}`}
      id={`slot-${number}`}
    >
      <p>{number}</p>
    </div>
  ));
  return <div className="grid">{grid}</div>;
};

export default Matrix;
