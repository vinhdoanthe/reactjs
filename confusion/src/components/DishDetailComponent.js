import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderComments({ comments, postComment, dishId }) {
    const header = (
        <h4 header="true">Comments</h4>
    )

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const commentLis = comments.map((comment) => {
        return (
            <Fade in>
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {(new Date(comment.date)).toLocaleDateString('en-US', options)}</p>
                </li>
            </Fade>
        );
    });
    return (
        <div className="col-12 col-md-5 m-1">
            {header}
            <ul className="list-unstyled">
            <Stagger in>
                {commentLis}
            </Stagger>
            </ul>
            <CommentForm dishId={dishId} postComment={postComment} />
        </div>
    );

}

function RenderDish({ dish }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
    );
}

const DishDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    } else if (props.errorMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errorMess}</h4>
                </div>
            </div>
        );
    } else if (props.dish == null) {
        return (<div></div>);
    } else {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments}
                        postComment={props.postComment}
                        dishId={props.dish.id} />
                </div>
            </div>
        );
    }
}

export default DishDetail;