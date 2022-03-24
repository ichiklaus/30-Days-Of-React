import React from 'react';

class TechsList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     console.log("🚀 ~ file in TechList Component: TechsList.jsx ~ line 6 ~ TechsList ~ constructor ~ props", this.props)
    // }
    render() {
        const {techStack} = this.props;
        // console.log("🚀 ~ file: TechsList.jsx ~ line 10 ~ TechsList ~ render ~ techStack", techStack)
        let getTechsFormatted = techStack.map((item) => (
            <li key={item}>{item}</li>
        ));
        return (
            <ul className='tech-stack'>
                {getTechsFormatted}
            </ul>
        );
    }
}

export default TechsList;