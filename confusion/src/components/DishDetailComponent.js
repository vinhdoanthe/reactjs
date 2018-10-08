import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

function RenderComments({ comments }) {
    const header = (
        <h4 header="true">Comments</h4>
    )
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const commentLis = comments.map((comment) => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author}, {(new Date(comment.date)).toLocaleDateString('en-US', options)}</p>
            </li>
        );
    });
    return (
        <div className="col-12 col-md-5 m-1">
            {header}
            <ul className="list-unstyled">
                {commentLis}
            </ul>
        </div>
    );

}

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

const DishDetail = (props) => {
    if (props.dish == null) {
        return (<div></div>);
    } else {
        return (
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>
        );
    }
}

export default DishDetail;