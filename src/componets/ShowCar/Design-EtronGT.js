import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function DescriptionCars() {
    const [cars, setCars] = useState([
        {
            id: uuidv4(),
            imgUrl: '/img-Design-EtronGT/D1.jpg',
            nameCar: 'Function can be so beautiful',
            desCar: 'Aerodynamically optimised shapes become functional details. From the intelligent air inlets at the front end to the vented wheel arches and the striking rear diffuser.'
        },
        {
            id: uuidv4(),
            imgUrl: '/img-Design-EtronGT/D2.jpg',
            nameCar: 'Matrix LED headlights',
            desCar: 'The optional matrix LED headlights with Audi laser light are a fundamental aspect of a progressive design language. An unmistakeable statement: the striking light signature with the blue X element of the laser light.',
        },
        {
            id: uuidv4(),
            imgUrl: '/img-Design-EtronGT/D3.jpg',
            nameCar: 'Animated rear light strip',
            desCar: 'An animated light strip runs across the entire width of the rear, framed at its outer edges by individual V-shaped LED segments within the lighting units themselves. This double reversing light and indicator function is a first for Audi.',
        },
        {
            id: uuidv4(),
            imgUrl: '/img-Design-EtronGT/D4.jpg',
            nameCar: 'Panoramic glass sunroof',
            desCar: 'The panoramic glass sunroof welcomes the horizon on board and creates a bright interior flooded with light.',
        },
    ]);

    return (
        <div style={{marginTop:'10%'}}>
            <div>
                <h1 style={{ fontFamily: 'Dancing Script, cursive',fontSize:50,marginBottom:'3%' }}>Exterior design</h1>
                <h4 style={{textAlign: 'center', display: 'block', margin: '5%' }}>Ideas become the future The proportions of a gran turismo – flat and wide with a long wheelbase – make it clear that this is where sportiness meets everyday usability. The sculptural design of the body epitomises power and performance.</h4>
            </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>


    )
}