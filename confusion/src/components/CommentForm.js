import React, { Component } from 'react'
import { Button, Modal, ModalHeader, Row, Label, Col, ModalBody } from 'reactstrap'
import { LocalForm, Control, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isFormOpen: false
        }
        this.toggleForm = this.toggleForm.bind(this);
        this.handleSubmitComment = this.handleSubmitComment.bind(this);
    }

    toggleForm() {
        this.setState(
            {
                isFormOpen: !this.state.isFormOpen
            }
        );
    }

    handleSubmitComment(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }

    render() {
        return (
            <React.Fragment>
                <Button outline>
                    <span className="fa fa-edit fa-lg" onClick={this.toggleForm}>Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isFormOpen} toggle={this.toggleForm} >
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12} >Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating"
                                        className="form-control" defaultValue="3">
                                        <option>1</option>
                                        <option>2</option>
                                        <option selected>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".name" name="name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            maxLength: maxLength(25),
                                            minLength: minLength(3)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            maxLength: "Name must be less than 26 characters",
                                            minLength: "Name must be at least 3 characters"
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" name="comment"
                                        className="form-control"
                                        rows="6" />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default CommentForm;