import React, { Component } from 'react';

class NoiDung extends Component {


    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps OK");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate OK");
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate OK");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate OK");
    }
    
    
    
    

    render() {
        return (
            <div>
                <h3>{this.props.ten}</h3>
            </div>
        );
    }
}

export default NoiDung;