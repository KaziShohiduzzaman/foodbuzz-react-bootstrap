import React, { useState } from 'react';
import { useEffect } from 'react';
import { Image, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './MealDetails.css'


const MealDetails = () => {
    const { mealId } = useParams()
    const [details, setDetails] = useState([])
    const history = useHistory();
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setDetails(data.meals[0]))
    }, [mealId])
    const handleDetailClick = () => {
        history.push('/home')
    }
    return (
        <div className='details-card bg-dark text-white'>
            <Image className='img-details' src={details.strMealThumb} roundedCircle fluid />
            <h2 className='mt-2'>Food Name: {details.strMeal}</h2>
            <h4 className='mt-2'>Category: {details.strCategory}, Food area: {details.strArea}</h4>
            <p className='p-3'>Instructions: {details.strInstructions}</p>
            <Button className='bg-dark' onClick={handleDetailClick}>Go to HomePage</Button>
        </div>
    );
};

export default MealDetails;