let Main = ({ myInfo: { techStack } }) => {
  function asList(input) {
    return input.map((item) => (
      <div className="skills__stack-box">
        <li key={item}>{item}</li>
      </div>
    ));
  }
  return (
    <main>
      <div className="skills">
        <p>Technical Skills</p>
        <ul key="skill-stack" className="skills__stack">{asList(techStack)}</ul>
      </div>
    </main>
  );
};
export default Main;
