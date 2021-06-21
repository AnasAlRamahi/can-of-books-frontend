import React, { Component } from 'react'
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import Book from './Book'


export class BestBooks extends Component {

    constructor(props){
        super(props);
        this.state = {
            userEmail: 'potato@gmail.com',
            books: [],
        }
    }

    componentDidMount = async () => {
        await axios.get(`${process.env.REACT_APP_URL}/books?email=${this.state.userEmail}`).then(response => {
            console.log(response);
            this.setState({
                books: response.data[0].books,
            })
        }).catch(error => {
            console.log(error.message);
        });
      }

    render() {
        return (
            <div>
                {
                    this.state.books.length>0 && 
                    this.state.books.map((obj,ind) => <Book key={this.state.books.name} bookData={this.state.books[ind]} />)  
                }
            </div>
        )
    }
}

export default withAuth0(BestBooks);
