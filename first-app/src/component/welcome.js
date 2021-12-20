import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        return (<h1>{this.props.name} studies at {this.props.college}</h1>)
    }
}

export default Welcome