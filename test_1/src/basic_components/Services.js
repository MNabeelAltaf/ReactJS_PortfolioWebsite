import React from 'react';

import "./Services.css"

import services_img_1 from './images/service1.jpg';
import services_img_2 from './images/service2.jpg';
import services_img_3 from './images/service3.jpg';


const Services = () => {
    return (
        <div>
            <h2 style={{ textAlign: "center", marginBottom:"5rem "}}>Services</h2>
          
                <div className='servicesImages'>
                    <img src={services_img_1} alt='work 1' />
                   
                    <img src={services_img_2} alt='work 2' />
                    <img src={services_img_3} alt='work 3' />
                </div>
        </div>
    );
};

export default Services;