import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link, NavLink } from "react-router-dom";

export default function AllModel() {
    const [imgModel, setImgModel] = useState([
        { id: uuidv4(), imgModel: "/img-AllModel/model-etrongt.png", nameModelCar: 'E-tron GT quattro', model: 'Sport' },
        { id: uuidv4(), imgModel: "/img-AllModel/model-audiA4.png", nameModelCar: 'A4 Sedan', model: 'Saloon' },
        { id: uuidv4(), imgModel: "/img-AllModel/model-audiA6.png", nameModelCar: 'A6 Sedan', model: 'Saloon' },
        { id: uuidv4(), imgModel: "/img-AllModel/model-audiA7.png", nameModelCar: 'A7 Sportback', model: 'Sportback' },
        { id: uuidv4(), imgModel: "/img-AllModel/model-audiA8.png", nameModelCar: 'A8 L', model: 'Saloon' },
        { id: uuidv4(), imgModel: "/img-AllModel/model-audiQ2.png", nameModelCar: 'Q2', model: 'SUV' },
        { id: uuidv4(), imgModel: "/img-AllModel/model-audiQ3.png", nameModelCar: 'Q3 Sportback', model: 'Sportback' },
        { id: uuidv4(), imgModel: "/img-AllModel/model-audiQ5.png", nameModelCar: 'Q5 Sportback', model: 'Sportback' },
        { id: uuidv4(), imgModel: "/img-AllModel/model-audiQ7.png", nameModelCar: 'Q7', model: 'SUV' },
        { id: uuidv4(), imgModel: "/img-AllModel/model-audiQ8.png", nameModelCar: 'Q8', model: 'SUV' },
    ]);
    const [dropDown, setDropdown] = useState(false);
    const [filteredModels, setFilteredModels] = useState([]);
    const toggleDropdown = () => {
        setDropdown(!dropDown);
        console.log('an va hien dropdown');
    }
    const filterModels = (modelType) => {
        if (filteredModels.length > 0 && filteredModels[0].model === modelType) {
            setFilteredModels([]);
        } else {
            const filtered = imgModel.filter((car) => car.model === modelType);
            setFilteredModels(filtered);
        }
    }

    return (
        <div className="All-Models">
            <div className="Title-All-Models">
                <div className="View-all-models">
                    <span style={{ fontSize: 80, fontFamily: 'Raleway, sans-serif' }}>View all models</span>
                </div>
            </div>
            <div className="Open-Filter">
                <button onClick={toggleDropdown} className="Button-Filter">
                    Open Filter
                </button>
                {dropDown && (
                    <div className="Box-Option-Filter">
                        <button className="Option-Filter" onClick={() => filterModels('SUV')}>SUV</button>
                        <button className="Option-Filter" onClick={() => filterModels('Saloon')}>Saloon</button>
                        <button className="Option-Filter" onClick={() => filterModels('Sportback')}>Sportback</button>
                        <button className="Option-Filter" onClick={() => filterModels('Sport')}>Sport</button>
                    </div>
                )}
            </div>
            <div className="Container-All-Models">
                {(filteredModels.length > 0 ? filteredModels : imgModel).map((car) => (
                    <div key={car.id} className="Box-All-Models">
                        <div className="Left-All-Models">
                            <img src={process.env.PUBLIC_URL + car.imgModel} alt={`Car ${car.id}`} />
                        </div>
                        <div className="Right-All-Models" style={{ alignItems: "flex-start", alignSelf: "center" }}>
                            <h1 style={{ fontFamily: 'Nova Square, sans-serif' }}>{car.nameModelCar}</h1>
                            <Link to="InforEtronGT"><button className="B-Book">Information</button></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
