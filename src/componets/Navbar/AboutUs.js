import React from "react"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function CustomerArea() {
    const [menuCustomer, setMenuCustomer] = useState([
        { id: uuidv4(), option: 'Delership Information' },
        { id: uuidv4(), option: 'Careers in VietNam' },
        { id: uuidv4(), option: 'The Audi Brand' },
    ])

    return (
        <div className="container-customer">
            <div className="menu-container">
                {menuCustomer.map((item) => (
                    <div key={item.id} className="menu-item">
                        <div className="Render-Option-Navbar">
                            <span>{item.option}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="img-customer">
                <div>
                    <img src='https://www.audi.vn/dam/nemo/tools/oneheader/672x378/Teaser_OneHeader_672x378_Haendlersuche.jpg'
                        className="Image-FindOut"
                    />
                </div>
                <div>
                    <span className="Option-FindOut">Contact us
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
    )
}
