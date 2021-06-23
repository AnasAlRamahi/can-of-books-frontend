import React, { Component } from 'react';
import UpdateBookFormModal from './UpdateBookFormModal';


export class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUpdate: false,
        }
    }

    showUpdateForm = (boolean) => {
        this.setState({
            showUpdate: boolean,
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h3>{this.props.bookData.name}</h3>
                    <p>{this.props.bookData.description}</p>
                    <p>{this.props.bookData.status}</p>
                </div>
                <div>
                    <button onClick={(e) => this.props.handleDelete(this.props.index, e)}>Delete</button>
                    <button onClick={() => this.showUpdateForm(true)}>Update</button>
                </div>
                {
                    <UpdateBookFormModal show={this.state.showUpdate} onHide={() => this.showUpdateForm(false)} handleUpdate={this.props.handleUpdate} index={this.props.index} />

                }
            </div>
        )
    }
}

export default Book
