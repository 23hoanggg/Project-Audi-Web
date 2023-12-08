import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ListCars() {
    const [listCars, setListCars] = useState([
        { id: uuidv4(), name: 'Audi E-tron GT', imageCar: './image/e-tron GT.png' },
        { id: uuidv4(), name: 'etron', imageCar: './image/e-tron.png' },
        { id: uuidv4(), name: 'Audi A4', imageCar: './image/audiA4.png' },
        { id: uuidv4(), name: 'Audi A6', imageCar: './image/audiA6.png' },
        { id: uuidv4(), name: 'Audi A7', imageCar: './image/audiA7.png' },
        // { id: uuidv4(), name: 'Audi A8', imageCar: './image/audiA8.png' },
    ]);
    const [bodyCars, setBodyCars] = useState([
        { id: uuidv4(), name: 'Sport', imageCar: './image/car-sport.png' },
        { id: uuidv4(), name: 'Coupé', imageCar: './image/car-coupe.png' },
        { id: uuidv4(), name: 'SUV', imageCar: './image/SUV.png' },
        { id: uuidv4(), name: 'Saloon', imageCar: './image/Saloon.png' },
        { id: uuidv4(), name: 'Sportback', imageCar: './image/Sportback.png' },
    ]);
    const [showCarData, setShowCarData] = useState("listCars");

    const handleListCarsRender = () => {
        setShowCarData("listCars");
    };

    const handleBodyCarsRender = () => {
        setShowCarData("bodyCars");
    };

    return (
        <div>
            <div className="Box-Button-ListCars">
                <button onClick={handleListCarsRender} className="Button-ListCars">Model</button>
                <button onClick={handleBodyCarsRender} className="Button-ListCars">Body</button>
            </div>
            {
                showCarData === "listCars" ? (
                    listCars.map((listCar) => (
                        <div key={listCar.id} className="Model-Car">
                            <div>
                                <img className="Image-ListCars"
                                    src={process.env.PUBLIC_URL + listCar.imageCar}
                                    alt={listCar.name}
                                />
                            </div>
                            <div className="Name-ListCars">
                                <a className="Link-ListCars">{listCar.name}</a>
                            </div>
                        </div>
                    ))
                ) : (
                    bodyCars.map((bodyCar) => (
                        <div key={bodyCar.id} className="Model-Car">
                                <img className="Image-ListCars"
                                    src={process.env.PUBLIC_URL + bodyCar.imageCar}
                                    alt={bodyCar.name}
                                />
                            <div className="Name-ListCars">
                                <a className="Link-ListCars">{bodyCar.name}</a>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    );
}
