import React, {Component} from "react"

class Hero extends Component{
    render(){
        return(
            <div>
                <h1>Olá, eu sou o herói {this.props.name} e estou lutando na arena {this.props.arena} </h1>
            </div>    
        )
    }
}

export default Hero