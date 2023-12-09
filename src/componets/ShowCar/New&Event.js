import React from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function EventCar() {
    const [events, setEvents] = useState([
        {
            id: uuidv4(),
            imgUrl: '/img-Events/event 1.jpg',
            nameEvent: 'Thought of an Audi? Now is the time',
            desEvent: 'Buy your Audi today to receive our exclusive "Audi NOW" package.',
            OptionEvent:'Read more'
        },
        {
            id: uuidv4(),
            imgUrl: '/img-Events/event 2.jpg',
            nameEvent: 'Exhibition of Sustainable Interiors',
            desEvent: 'REBORN DÉCOR - From Trash to Treasure.',
            OptionEvent:'Read more'
        },
        {
            id: uuidv4(),
            imgUrl: '/img-Events/event 3.jpg',
            nameEvent: 'Audi Vietnam announces new attractive price list for all models, effective from October 2023',
            desEvent: 'Audi is always one of the most favorite brands thanks to its modern design, advanced technology and transfer great experience with superior safety.',
            OptionEvent:'Read more'
        },
        {
            id: uuidv4(),
            imgUrl: '/img-Events/event 4.jpg',
            nameEvent: 'Audi RS e-tron GT Leads the 21km Race at the 2023 SonKim Ho Chi Minh City Thu Duc Half-Marathon',
            desEvent: 'Audi Vietnam was honored to be the official partner of the 2023 SonKim Ho Chi Minh City Thu Duc Half-Marathon, which took place on September 1-3, 2023. At the event, the Audi RS e-tron GT, Audi first all-electric sports car, led the 21km half-marathon race.',
            OptionEvent:'Read more'
        },
        {
            id: uuidv4(),
            imgUrl: '/img-Events/event 5.jpg',
            nameEvent: 'Chuyển dịch - In Motion - a solo display by architect Ho Viet Vinh, co-organized by Lotus Gallery and Audi Vietnam',
            desEvent: 'The exhibition will be opened at 18:30 on September 1st , 2023 at Audi Charge Lounge ( 6B Ton Duc Thang street, Ben Nghe, District 1). The display is admission free, daily opens from 9:00 - 18:00 from September 2, 2023 to the end of September 10, 2023.',
            OptionEvent:'Read more'
        },
        {
            id: uuidv4(),
            imgUrl: '/img-Events/event 6.jpg',
            nameEvent: 'Audi Tan Binh is pleased to announce its "Welcome Summer and Enjoy Free Services with Many Attractive Gifts" event',
            desEvent: '',
            OptionEvent:'Read more'
        },
        {
            id: uuidv4(),
            imgUrl: '/img-Events/event 7.jpg',
            nameEvent: 'Audi and Vietmap sign strategic partnership for comprehensive driving experience with new Android box BS10 in Vietnam',
            desEvent: 'Audi and Vietmap - two leading brands in the automotive technology industry – sign- today a strategic partnership agreement and unveiled their latest product and cooperation at the prestigious Audi Charging Lounge showroom in District 1.',
            OptionEvent:'Read more'
        },
    ]);

    return (
        <div>
            <div className="Background-Events">
            </div>
            <div className="Box-Highlight">
                <a className="Menu-Highlight" >
                    <span>Overview</span>
                </a>
                <a className="Menu-Highlight" >
                    <span>Careers in Vietnam</span>
                </a>
                <a className="Menu-Highlight" >
                    <span>New & Events</span>
                </a>
                <a className="Menu-Highlight" >
                    <span>The Audi Brand</span>
                </a>
            </div>
            {events.map((event) => (
                <div className='Big-Container'>
                    <div key={event.id} className='car-container'>
                        <div className='Image-car'>
                            <img src={process.env.PUBLIC_URL + event.imgUrl}
                                alt="Car Image"
                                className='Des-Image' />
                        </div>
                        <div className='Container-description' style={{ alignItems: 'flex-start' }}>
                            <div className='Box-DescriptionCars'>
                                <span className="Name-Car" style={{ fontSize: 28, fontWeight: 'bold' }}>{event.nameEvent}</span>
                                <p className='Des-car'>{event.desEvent}</p>
                                <div>
                            <span className="Option-FindOut">{event.OptionEvent}
                                <svg width="20" height="20" viewBox="0 0 15 15"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor"
                                        d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1
                                    -1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414Z"
                                    />
                                </svg>
                            </span>
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}