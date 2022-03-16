export default function Numbers({ numbers }) {
  const numbersAsList = numbers.map((element) => {
    return <li key={element}>{element}</li>;
  });
  return (
    <div>
      <h1>Numbers list</h1>
      <ul>{numbersAsList}</ul>
    </div>
  );
}
