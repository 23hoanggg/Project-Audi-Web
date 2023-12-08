import React from "react"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function AboutUs(){
    const [menuCustomer, setMenuCustomer] = useState([
        {id:uuidv4(), option:'Audi Service Centre'},
        {id:uuidv4(), option:'Recall Campaign Lookup'},
        {id:uuidv4(), option:'Book test Drive'},
        {id:uuidv4(), option:'Contact us'},
    ])

    return (
        <>
            {menuCustomer.map((item) => (
                <div>
                    <div>
                        
                    </div>
                    <span key={item.id}>{item.option}</span>
                </div>    
            ))}
        </>
    )
}
