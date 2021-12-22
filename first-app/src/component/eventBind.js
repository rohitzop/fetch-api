import React , {Component} from 'react'

class EventBind extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Hello'
        }
        // this.clickHandler= this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    //     console.log(this)
    // }

     clickHandler = () =>{
         this.setState({
             message: 'Goodbye!'
         })
     }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Clicked me</button> binding in render*/}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> binding in class constructor*/}
                {/* <button onClick={this.clickHandler}>Click</button> Binding in the constructor */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind