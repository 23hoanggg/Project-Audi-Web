import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function DescriptionCars() {
    const [cars, setCars] = useState([
        {
            id: uuidv4(),
            imgUrl: '/image/ShowCar1.jpg',
            nameCar: 'The first RS high-performance car in Vietnam - Audi RS e-tron GT',
            desCar: 'With a powerful electric motor and advanced technology, the Audi RS e-tron GT delivers powerful and agile acceleration. From reaching 0-100 km/h in just 3.4 seconds, you will feel the absolute power from the very first moment.'
        },
        {
            id: uuidv4(),
            imgUrl: '/image/ShowCar2.jpg',
            nameCar: 'The leading urban car - Audi Q2',
            desCar: 'With its compact size, the Audi Q2 is easy to maneuver in the city and provides convenience and comfort for you every day.',
        },
        {
            id: uuidv4(),
            imgUrl: '/image/ShowCar3.jpg',
            nameCar: 'The pinnacle of luxury',
            desCar: 'Audi Q8.',
        },
    ]);

    return (
        <div>
            {cars.map((car) => (
                <div className='Big-Container'>
                    <div key={car.id} className='car-container'>
                        <div className='Image-car'>
                            <img src={process.env.PUBLIC_URL + car.imgUrl}
                                alt="Car Image"
                                className='Des-Image' />
                        </div>
                        <div className='Container-description'>
                            <div className='Box-DescriptionCars'>
                                <span className="Name-Car">{car.nameCar}</span>
                                <p className='Des-car'>{car.desCar}</p>
                                <div className='container-button'>
                                    <button className='B-Discover'>Discover Now</button>
                                    <button className='B-Book'>Book a test</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    )
}