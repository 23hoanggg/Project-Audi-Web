import React from "react";
import { v4 as uuidv4 } from 'uuid';
import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SearchModel() {
  const location = useLocation();
  const myParam = new URLSearchParams(location.search).get('model')?.toLowerCase();
  console.log(myParam);

  const audi = [
    { id: uuidv4(), nameAudi: 'Audi E-tron GT', imgAudi: '/img-AllModel/model-etrongt.png' },
    { id: uuidv4(), nameAudi: 'Audi A7 Sportback', imgAudi: '/img-AllModel/model-A7 sportback.png' },
    { id: uuidv4(), nameAudi: 'Audi Q3 Sportback', imgAudi: '/img-AllModel/model-Q3 sportback.png' },
    { id: uuidv4(), nameAudi: 'Audi Q5 Sportback', imgAudi: '/img-AllModel/model-Q5 sportback.png' },
    { id: uuidv4(), nameAudi: 'Audi A4', imgAudi: '/img-AllModel/model-audiA4.png' },
    { id: uuidv4(), nameAudi: 'Audi A6', imgAudi: '/img-AllModel/model-audiA6.png' },
    { id: uuidv4(), nameAudi: 'Audi A7', imgAudi: '/img-AllModel/model-audiA7.png' },
    { id: uuidv4(), nameAudi: 'Audi A8', imgAudi: '/img-AllModel/model-audiA8.png' },
    { id: uuidv4(), nameAudi: 'Audi Q2', imgAudi: '/img-AllModel/model-audiQ2.png' },
    { id: uuidv4(), nameAudi: 'Audi Q3', imgAudi: '/img-AllModel/model-audiQ3.png' },
    { id: uuidv4(), nameAudi: 'Audi Q5', imgAudi: '/img-AllModel/model-audiQ5.png' },
    { id: uuidv4(), nameAudi: 'Audi Q7', imgAudi: '/img-AllModel/model-audiQ7.png' },
    { id: uuidv4(), nameAudi: 'Audi Q8', imgAudi: '/img-AllModel/model-audiQ8.png' },
  ];

  const filteredCars = audi.filter((car) => car.nameAudi.toLowerCase().includes(myParam));
  const navigate = useNavigate();
  const handleNoResult = () => {
    if (filteredCars.length === 0)
      console.log('bạn sẽ trở về trang chủ sau 5s');
    setTimeout(() => {
      navigate('/');
    }, 5000)
  }

  return (
    <>
      {filteredCars.length === 0 ? (
        <div>
          <h1 style={{ fontFamily: 'Nova Square, sans-serif', textAlign: 'center', display: 'block', marginBottom: '5%', marginTop: '8%' }}>
            No results found for '{myParam}'.
          </h1>
          <p style={{ fontFamily: 'Nova Square, sans-serif', textAlign: 'center', display: 'block', marginBottom: '5%', fontSize: 25 }}>
            Please try another search term or use the suggested quick links.
            <p style={{ textAlign: 'center', display: 'block', marginBottom: '8%', fontSize: 40 }}>You will return to the home page after 5 seconds</p>
            {/* {handleNoResult()} */}
          </p>
        </div>
      ) : (
        filteredCars.map((car) => (
          <div key={car.id} style={{ marginTop: '5%' }} className="container-search">
            <h1 style={{ fontFamily: 'Nova Square, sans-serif' }}>{car.nameAudi}</h1>
            <img src={process.env.PUBLIC_URL + car.imgAudi}
              className="img-search"
              alt="Car Image" />
          </div>
        ))
      )}
    </>
  );
}
