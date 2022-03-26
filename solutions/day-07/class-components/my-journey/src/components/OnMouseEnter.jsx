import {Component} from 'react';

const exerciseContainer = {
    width: "400px",
    height: "400px",
    border: "1px solid var(--slate)",
}

const flex = {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
}

export default class OnMouseEnter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "",
            p: {
                border: "1px solid var(--accent-color)",
                width: "80px",
                textAlign: "center",
            }
        }
    };

    handleMouseEnter = (event) => {
        this.setState({
            p: {
                position: "relative",
                top: `${Math.floor(Math.random() * 90)}%`,
                left: `${Math.floor(Math.random() * 90)}%`,
                border: "1px solid var(--accent-color)",
                width: "80px",
                textAlign: "center",

            },
        })
    }

    render() {
        return (
            <div className='paragraph margin' style={flex}>
                <div  style={exerciseContainer}>
                    <p style={this.state.p}
                    onMouseEnter={this.handleMouseEnter}>Move me</p>
                </div>
            </div>
        );
    }
}