import React, { Component } from 'react'

export class Book extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.bookData.name}</h3>
                <p>{this.props.bookData.description}</p>
                <p>{this.props.bookData.status}</p>
            </div>
        )
    }
}

export default Book
