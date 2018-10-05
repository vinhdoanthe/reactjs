import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {

        super(props);
        this.state = {
            
        }
    }

    renderComments(dish) {
        const header = (
            <h4 header>Comments</h4>
        )
        const options = {year: 'numeric', month: 'long', day: 'numeric'};
       
        const comments = dish.comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {(new Date(comment.date)).toLocaleDateString('en-US', options)}</p>
                </li>
            );
        });
        return (
            <div>
                {header}
                <ul className="list-unstyled">
                    {comments}
                </ul>
            </div>
        );

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