import React from 'react';
import "./Home.css";

import profile_image from './images/dp_pic.jfif';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';

import Contact from './Contact';

function Home() {
    return (
        <div className='home_container' >
            <div className='intro'>
                <h2 >M.Nabeel Altaf</h2>
                <h4 >Software Engineer</h4>
                <p className='introTxt'>
                    As a software engineer, I am a dedicated professional who specializes in
                    developing high-quality software applications. I have a deep understanding of programming languages, algorithms, and software development methodologies. With a passion for problem-solving, I enjoy tackling complex challenges and transforming them into efficient and user-friendly solutions.
                </p>


                <div className='home_buttons_container'>
                    <Link to='/contact'><button>Contact Me</button></Link>
                    <Link to='/contact'> <button>Hire Me</button></Link>
                </div>

                <Routes>
                    <Route path="/contact" element={<Contact />} />
                </Routes>

            </div>

            <div className="dp_picture">
                <img src={profile_image} alt="image" />
            </div>
        </div>
    );
}

export default Home;