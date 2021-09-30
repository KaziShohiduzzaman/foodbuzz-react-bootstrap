import React from 'react';
import Button from 'react-bootstrap/Button';
const Home = () => {
    return (
        <div className='text-center background-img-dark'>
            <h1 className='text-white mt-4'>Welcome to FoodBuzz...</h1>
            <h4 className='text-white text-bold'>All delicious food is here...</h4>
            <Button variant="warning" size="lg">
                Search Your Food
            </Button>{' '}
        </div>
    );
};

export default Home;