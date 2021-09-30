import React from 'react';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
const Home = () => {
    const history = useHistory()
    const handleHomeToMeals = () => {
        history.push('./meals')
    }
    return (
        <div className='text-center background-img-dark'>
            <h1 className='text-white mt-4'>Welcome to FoodBuzz...</h1>
            <h4 className='text-white text-bold'>All delicious food is here...</h4>
            <Button onClick={handleHomeToMeals} variant="warning" size="lg">
                Search Your Food
            </Button>{' '}
        </div>
    );
};

export default Home;