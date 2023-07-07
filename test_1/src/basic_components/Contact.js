import React, { useState } from 'react';

import "./Contact.css";


const Contact = () => {


    const [formData, setformData] = useState({
        name: '',
        email: '',
        msg: ''
    })

    const on_change = (event) => {


        setformData({ ...formData, [event.target.name]: event.target.value });

    }

    const handleSubmit = (event) => {

        // if fields are empty
        if (formData.name == '') {
            alert("Please Enter Name")
            return
        }

        if (formData.email == '') {
            alert("Please Enter Email")
            return
        }

        // if fields are filled
        if (formData.name.length != 0 && formData.email.length != 0) {

            const contact_formData = new FormData();
            contact_formData.append('name', formData.name);
            contact_formData.append('email', formData.email);
            contact_formData.append('message', formData.msg);


            // using fetch api to send data to php file to store in phpMyAdmin
            fetch('http://localhost/ReactJS_FormData/reactjs_formData.php', {
                method: 'POST',
                body: contact_formData,
            })
                .then(response => response.text())
                .then(data => {
                    console.log(data); // Display the response from the PHP API endpoint
                })
                .catch(error => {
                    console.error(error);
                });

                setformData({ name: '', email: '', msg: '' })
                alert("Form Submit Sucessfully!")
        }



        event.preventDefault();

        // console.log(formData);

    }

    return (
        <div className="contact_mainContainer">
            <h2>Contact</h2>
            <form className='contact_form' onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Enter your Full Name' value={formData.name} onChange={on_change} />
                <input type="email" name='email' placeholder='Enter your Email' value={formData.email} onChange={on_change} />
                <textarea type="text2" name='msg' placeholder='Enter your Message' value={formData.msg} onChange={on_change}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );

};





export default Contact;