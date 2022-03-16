// List component
const ListItem = ({skillList: [tech, score]}) => {
    return (
        <li id="skill-item">
            {tech} | {score}
        </li>
    );
}

// Skills Component
const UnorderedList = ({ skillStack }) => {
    const skillsList = skillStack.map((skill) => <ListItem key={skill} skillList={skill} />)
    return <ul id="skills-ul" key={"skillsList"}>{skillsList}</ul>
  }

export default UnorderedList;