import React, { Component } from 'react';



const buttonWithStyle = (HereGoesTheComponent) => {

    /** Functional HOC */
    // return (props) => {
    //     // Logic of Higher Component Template goes here:
    //     const buttonStyles = {
    //         backgroundColor: '#61dbfb',
    //         padding: '10px 25px',
    //         border: 'none',
    //         borderRadius: 5,
    //         margin: 3,
    //         cursor: 'pointer',
    //         fontSize: 18,
    //         color: 'white',
    //     }
    //     // End of logic
    //     return <HereGoesTheComponent {...props} style={buttonStyles}  />
    // }
    
    /** Class-based HOC */
    return class extends Component {
        state = {
            buttonStyles: {
                backgroundColor: '#61dbfb',
                padding: '10px 25px',
                border: 'none',
                borderRadius: 5,
                margin: 3,
                cursor: 'pointer',
                fontSize: 18,
                color: 'white',
            }
        }
        render() {
            return <HereGoesTheComponent {...this.props} style={this.state.buttonStyles} />
        }
    }
}


export default buttonWithStyle;