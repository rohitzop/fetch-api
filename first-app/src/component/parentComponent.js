import React , {Component} from 'react'

import ChildComponent from './childComponent'

class ParentComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            parentName: 'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`hello ${this.state.parentName} from ${childName}`)
    }

    clickHandler(){
        console.log('class Clicked me')
    }
    render(){
        return(
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent