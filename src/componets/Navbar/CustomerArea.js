import React from "react"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function CustomerArea() {
    const [menuCustomer, setMenuCustomer] = useState([
        { id: uuidv4(), option: 'Audi Service Centre' },
        { id: uuidv4(), option: 'Book test Drive' },
        { id: uuidv4(), option: 'Recall Campaign Lookup' },
        { id: uuidv4(), option: 'Contact us' },
    ])

    return (
        <div className="menu-container">
            {menuCustomer.map((item) => (
                <div key={item.id} className="menu-item">
                    <div className="Render-Option-Navbar">
                        <span>{item.option}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
