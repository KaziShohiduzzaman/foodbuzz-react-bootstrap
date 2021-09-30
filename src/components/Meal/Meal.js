import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Meal = (props) => {
    const { strMeal, strInstructions, strMealThumb, idMeal } = props.meal
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        Instructions : {strInstructions.slice(0, 100)}
                    </Card.Text>
                </Card.Body>

                <NavLink className='text-decoration-none' to={`/meal/${idMeal}`}>
                    <Button className='btn btn-dark w-50 d-block mx-auto mb-3' variant="primary">Meal Details</Button>{' '}
                </NavLink>
            </Card>
        </Col>
    );
};

export default Meal;