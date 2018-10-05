import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
import DishDetail from './DishDetailComponent'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDetailDish(dish) {
        if (dish != null) {
            return (
                <DishDetail dish={dish} />
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg witdth="100%" object src={dish.image} alt={dish.name}></CardImg>
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        }
        );

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {/* <div className="row"> */}
                    {this.renderDetailDish(this.state.selectedDish)}
                {/* </div> */}
            </div>
        );
    }
}

export default Menu;