import React, { Component } from "react"

class Enemy extends Component {
    render() {
        return (
            <div>
                <h1>Olá, eu sou o inimigo {this.props.name} e estou lutando na arena {this.props.arena}</h1>
            </div>
        )
    }
}

export default Enemy