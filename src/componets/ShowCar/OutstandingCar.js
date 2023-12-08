import React from 'react';

export default function OutstandingCar() {
    const OutstandingCar = {
        imgOutstanding: '/image/Big-AudiA8L.jpg',
        outstandingName: 'Space of Progress - Audi A8 L',
        desOutstanding: 'Class manifests itself in many aspects, for us exquisite elegance must show at first sight.',
        discoverOutstanding: 'Discover Audi A8 Now',
        bookOutstanding: 'Book a test driver',
    };

    return (
        <div className="Background-Outstanding">
            <div className='Container-Content-Outstading'>
                <h2 className='Outstanding-Name'>
                    {OutstandingCar.outstandingName}
                </h2>
                <p className='Outstanding-Des'>
                    {OutstandingCar.desOutstanding}
                </p>
                <div className='Container-Button-Outstanding'>
                    <button className='Discover-Button-Outstanding'>
                        {OutstandingCar.discoverOutstanding}
                    </button>
                    <button className='Book-Button-Outstanding'>
                        {OutstandingCar.bookOutstanding}
                    </button>
                </div>
            </div>
        </div>
    );
}
