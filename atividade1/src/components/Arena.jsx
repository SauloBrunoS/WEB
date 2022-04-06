import React, { Component } from "react"

class Arena extends Component {
    render() {
        return (
            <div>
                {React.Children.map(this.props.children, personagem => React.cloneElement(personagem, { ...this.props }))}
            </div>
        )
    }
}

export default Arena