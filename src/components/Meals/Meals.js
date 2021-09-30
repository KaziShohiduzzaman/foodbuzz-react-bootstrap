import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FormControl, Row, Spinner } from 'react-bootstrap';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [inputText, setInputText] = useState('')
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [inputText])
    const handleSearchBox = input => {
        const searchTextValue = input.target.value;
        setInputText(searchTextValue);
    }

    return (
        <div className='bg-color'>
            <div className="d-block w-50 mx-auto pt-4">
                <FormControl onChange={handleSearchBox}
                    placeholder="Search your Foods..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                />
            </div>
            <div className='mt-4'>
                {
                    meals.length === 0 ?
                        <Spinner className='d-block mx-auto my-4' animation="border" variant="warning" />
                        :
                        <Row xs={1} md={3} className="g-4">
                            {
                                meals.map(meal => <Meal key={meal.IdMeal} meal={meal}></Meal>)
                            }
                        </Row>
                }

            </div>
        </div>
    );
};

export default Meals;