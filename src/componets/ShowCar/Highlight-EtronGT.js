import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function HighlightEtronGT() {
  const [infor, setInfor] = useState([
    { id: uuidv4(), title: 'Electrical output', number: '350', des: 'Total electrical torque: 630 Nm' },
    { id: uuidv4(), title: 'Acceleration (0-100 km/h)', number: '4.1', des: '' },
    { id: uuidv4(), title: 'Range (WLTP) up to', number: '488', des: '' }
  ]);

  return (
    <div style={{marginTop:'5%'}}>
      <h1 style={{ fontFamily: 'Dancing Script, cursive',fontSize:50 }}>Highlights of the e-tron GT:</h1>
      <div className='Box-Highlight-Audi'>
        {infor.map((item) => (
          <div key={item.id} className='Highlight-Audi'>
            <h2 style={{ fontFamily: 'Nova Square, sans-serif' }}>{item.title}</h2>
            <h1 >{item.number}</h1>
            <h3>{item.des}</h3>
          </div>
        ))}
      </div>
      <h5 style={{ color: 'gray', textAlign: 'center', display: 'block', margin: '5%' }}>
        Combined power consumption in kWh/100 km: 19.6–18.8 (NEDC); 21.8–19.9 (WLTP); Combined CO₂ emissions in g/km: 0. Electrical consumption and CO₂ emission figures given in ranges depend on the equipment selected for the vehicle.
      </h5>
    </div>
  );
}
