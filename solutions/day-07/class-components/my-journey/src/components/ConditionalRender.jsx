import React from 'react';

class ConditionalRender extends React.Component {
    state = {
        isLoggedIn: false,
    }

    render() {
        const data = {
            welcome: '30 Days of React',
            title: 'Getting started!',
        }

        let status;
        if(this.state.isLoggedIn) {
            status = <h3>Welcome to 30 days of React</h3>
        } else {
            status = <h3>Please, login to continue</h3>
        }

        return (
            <div className='cr-container'>
                
            </div>
        );
    }
}

export default ConditionalRender;