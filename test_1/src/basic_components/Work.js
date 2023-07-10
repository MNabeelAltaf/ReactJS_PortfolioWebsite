import React from 'react';

import "./Work.css"

import work_img_1 from './images/work1.png';
import work_img_2 from './images/work2.png';
import work_img_3 from './images/work3.png';

function Work() {
    return (
        <div>
            <h2 style={{ textAlign: "center", marginBottom:"5rem "}}>My Work</h2>
          
                <div className='workImages'>
                    <img src={work_img_1} alt='work 1' />
                  
                    <img src={work_img_2} alt='work 2' />
                    <img src={work_img_3} alt='work 3' />
                </div>
        </div>
    );
}

export default Work;