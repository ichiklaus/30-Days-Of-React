import React from "react";

class TechsList extends React.Component {
  Skills = (techStack) => {
    return techStack.map((item) => (
      <>
        <li key={item}>{item}</li>
      </>
    ));
  };

  render() {
    const { techStack } = this.props;
    return <ul className="tech-stack">{this.Skills(techStack)}</ul>;
  }
}

export default TechsList;
