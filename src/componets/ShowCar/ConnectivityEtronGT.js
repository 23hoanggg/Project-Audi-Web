import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Connectivity() {
    const [connectivity, setConectivity] = useState([
        {
            id: uuidv4(),
            title: 'Fascinating operating concept',
            des: 'The functional centre is located at the front, visibly focused on the driver, framed by the centre console and the cockpit with its functional touchscreen.'
        },
        {
            id: uuidv4(),
            title: 'Fully digital infotainment system:',
            des: 'Enjoy MMI Touch 10.1-inch central screen and Audi Smart Phone interface.'
        },
        {
            id: uuidv4(),
            title: 'Rear seat row:',
            des: 'The shaped outer rear seats with an additional centre seat underline the sporty character.'
        },
        {
            id: uuidv4(),
            title: 'Luggage compartment: ',
            des: 'As an electric vehicle, the Audi e-tron GT quattro offers two luggage compartments, with a capacity of 85 l at the front and 405 l at the rear. If necessary, the rear seats can be split-folded 40:20:40.'
        },
    ])
    return (
        <div style={{marginTop:'10%'}}>
            <h1 style={{ fontFamily: 'Dancing Script, cursive',fontSize:65,marginBottom:'5%'}}>Connectivity</h1>
            <div className="Container-Connectivity">
                {connectivity.map((item) => (
                    <div key={item.id} >
                        <div className="Box-Connectivity">
                            <h2>{item.title}</h2>
                            <span style={{fontSize: 20}}>{item.des}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}