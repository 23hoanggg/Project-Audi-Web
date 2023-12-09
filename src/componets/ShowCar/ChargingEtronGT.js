import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ChargingEtronGT() {
  const [infor, setInfor] = useState([
    { id: uuidv4(), title: 'Battery charged from 5% to 80% in', number: '22.5 ', des: '(under ideal conditions)' },
    { id: uuidv4(), title: 'Charging system', number: '800 ', des: 'Maximum charging power: 270 kW' },
    { id: uuidv4(), title: 'Battery capacity (net) up to', number: '83.7 ', des: '' }
  ]);

  return (
    <div style={{ marginTop: '10%' }}>
      <span style={{ fontFamily: 'Dancing Script, cursive',fontSize:50 }}>Charging at home and on the road</span>
      <h4 style={{ color: 'gray', textAlign: 'center', display: 'block', margin: '5%' }}>
        The 800-volt lithium-ion battery integrated flat into the underbody offers extremely high performance – both when charging and when driving. In conjunction with the recuperation system, a range of up to 488 km was calculated according to the WLTP measuring procedure (Combined power consumption in kWh/100 km: 19.6–18.8 (NEDC); 21.8–19.9 (WLTP); Combined CO₂ emissions in g/km: 0. Electrical consumption and CO₂ emission figures given in ranges depend on the equipment selected for the vehicle).
      </h4>
      <div className='Box-Highlight-Audi'>
        {infor.map((item) => (
          <div key={item.id} className='Highlight-Audi'>
            <h2 style={{ fontFamily: 'Nova Square, sans-serif' }}>{item.title}</h2>
            <h1>{item.number}</h1>
            <h3>{item.des}</h3>
          </div>
        ))}
      </div>
      <h4 style={{ color: 'gray', textAlign: 'center', display: 'block', margin: '5%' }}>
        Combined power consumption in kWh/100 km: 19.6–18.8 (NEDC); 21.8–19.9 (WLTP); Combined CO₂ emissions in g/km: 0.Electrical consumption and CO₂ emission figures given in ranges depend on the equipment selected for the vehicle.
      </h4>
    </div>
  );
}
