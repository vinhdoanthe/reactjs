import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {

        super(props);
        this.state = {

        }
    }

    renderComments(dish) {

        const comments = dish.comments.map((comment) => {
            return (
                <div key={comment.id} className="list-unstyled">
                    <div>{comment.comment}</div>
                    <div>{comment.author}</div>
                </div>
            );
        });
        return comments;
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" object src={this.props.dish.image} alt={this.props.dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }

}

export default DishDetail;