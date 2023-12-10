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
        <div className="container-customer">
            <div className="menu-container">
                {menuCustomer.map((item) => (
                    <div key={item.id} className="menu-item">
                        <div className="Render-Option-Navbar">
                            <span className="item-option">{item.option}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="img-customer">
                <div>
                    <img src='https://www.audi.vn/content/dam/nemo/sea/vn/new-homepage/2023/06/883x496-book-a-test-drive.jpg?imwidth=880'
                        className="Image-FindOut"
                    />
                </div>
                <div>
                    <span className="Option-FindOut">Book a test drive
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
