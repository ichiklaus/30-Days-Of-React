import React, { Component } from 'react';

function HOCStyledButton(ButtonType, name = "default") {
    return class extends Component {
        state = {
            colors: [
                {
                    name: 'default',
                    backgroundColor: '#e7e7e7',
                    color: '#000000',
                },
                {
                    name: 'react',
                    backgroundColor: '#61dbfb',
                    color: '#ffffff',
                },
                {
                    name: 'success',
                    backgroundColor: '#4CAF50',
                    color: '#ffffff',
                },
                {
                    name: 'info',
                    backgroundColor: '#2196F3',
                    color: '#ffffff',
                },
                {
                    name: 'warning',
                    backgroundColor: '#ff9800',
                    color: '#ffffff',
                },
                {
                    name: 'danger',
                    backgroundColor: '#f44336',
                    color: '#ffffff',
                },
            ],

            buttonStyles: {
                padding: '10px 45px',
                border: 'none',
                borderRadius: 3,
                margin: 3,
                cursor: 'pointer',
                fontSize: '1.25rem',
            }
        }
        
        getStyles() {
            const { backgroundColor, color } = this.state.colors.find(color => color.name === name);
            const buttonStyles = {
                padding: '10px 45px',
                border: 'none',
                borderRadius: 3,
                margin: 3,
                cursor: 'pointer',
                fontSize: '1.25rem',
                backgroundColor,
                color
            }
            return buttonStyles;
        }

        render() {
            return <ButtonType {...this.props} style={this.getStyles()} />
        }
    }
}

export default HOCStyledButton;