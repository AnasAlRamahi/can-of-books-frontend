import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

export class BookFormModal extends Component {
    render() {
        return (
            <div>
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Form style={{ padding: '20px' }} onSubmit={this.props.handleAddBook} >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Add a Book!
                            </Modal.Title>
                        </Modal.Header>

                        <Form.Group className="mb-3" controlId="bookName">
                            <Form.Label>Book Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter book name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter description of the book" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="status">
                            <Form.Check type="checkbox" label="Status" />
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="primary" type="submit" onClick={this.props.onHide}>
                                ADD!
                            </Button>
                            <Button onClick={this.props.onHide}>Close</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </div>
        )
    }
}

export default BookFormModal
