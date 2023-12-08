import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function FindOutMore() {
    const [findOut, setFindOut] = useState([
        {
            id: uuidv4(),
            ImgFindOut: '/image/FO-BookCar.jpg',
            TitleFindOut: 'Book a test drive',
            OptionFindOut: 'Book now',
        },
        {
            id: uuidv4(),
            ImgFindOut: '/image/FO-Locate.jpg',
            TitleFindOut: 'Dealership Information',
            OptionFindOut: 'Locate here',
        },
        {
            id: uuidv4(),
            ImgFindOut: '/image/FO-Career.jpg',
            TitleFindOut: 'Career',
            OptionFindOut: 'Discover more',
        }
    ]);

    return (
        <div>
            <div className="Head-Title-FindOut">
                <h1 style={{fontFamily:'Raleway , sans-serif'}}>Find Out More</h1>
            </div>
            {findOut.map((item) => (
                <div className="Container-FindOut">
                    <div key={item.id} className="Box-FindOut">
                        <div>
                            <img src={process.env.PUBLIC_URL + item.ImgFindOut}
                                alt={item.TitleFindOut}
                                className="Image-FindOut"
                            />
                        </div>
                        <div>
                            <span className="Title-FindOut">{item.TitleFindOut}</span>
                        </div>
                        <div>
                            <span className="Option-FindOut">{item.OptionFindOut}
                                <svg width="24" height="24" viewBox="0 0 15 15"
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
            ))}
        </div>
    );
}
