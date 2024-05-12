'use client'


import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import "./Sec5.scss"
import Image from 'next/image'
import shareEx from "../../../../public/static/images/shareEx.JPG"
import { PiCookingPotBold } from "react-icons/pi";
// import { t } from "i18next";
import { useTranslation } from "react-i18next";


function Sec5() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      name, 
      email,
      message
    })
    if(name && email && message) {

      let messageData = {
        name, 
        email,
        message
      }

      try {
        
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageData),
        });
  
        if (!response.ok) {
            throw new Error(`Failed to send message: ${response.statusText}`);
        }
  
        // log a successfulll notification;
        toast.success(`Hey ${name}, we have successfully received your message`);
  
        // reset the data after successfully sent them 
          setName('');
          setEmail('');
          setMessage('');
  
    } catch (error) {
        // console.error('Error sending message:', error.message);
        toast.error('Error sending message. Please try again later.');
    }

    }

    


  }


  return (
    <section className="Sec5-container" >
      <div className='Sec5' >
      <PiCookingPotBold />
      <h1>
      {t("Sec5_title")}
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">{t("name")}:</label>
        <input type="text" 
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        />
        <label htmlFor="email">{t("email")}:</label>
        <input type="email" 
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        />
        <textarea name="message" id="message" cols="35" rows="10" placeholder={t("message") } 
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        ></textarea>
        <button type='submit' > {t("submit")} </button>
      </form>
      <p>
      {t("Sec5_text")}
      </p>
      </div>
      <Image
      src={shareEx}
      width={500}
      height={700}
      alt="shareEx"
    /> 
      <Toaster
        position="top-right"
        reverseOrder={true}
        toastOptions={{
        // Define default options
        className: '',
        duration: 1000,
         
             // Default options for specific types
        success: {
        duration: 10000,
        },
        erro: {
        duration: 10000,
            },
           }}
          />
     
    </section>
  )
}

export default Sec5
