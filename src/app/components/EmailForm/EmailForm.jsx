import React from 'react';
import emailjs from 'emailjs-com';
import { useClient } from 'next/client'; // Import useClient
import { useNavigation } from 'next/navigation'; // Import useNavigation
import "./EmailForm.scss";

const EmailForm = () => {
    const navigation = useNavigation(); // Initialize useNavigation
    const [email, setEmail] = useClient(() => useState('')); // Use useClient for useState
    const [message, setMessage] = useClient(() => useState('')); // Use useClient for useState

    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Your emailjs service ID
      const serviceId = 'service_3u93kz1';
      // Your emailjs template ID
      const templateId = 'template_ug73vun';
      // Your emailjs user ID
      const userId = 'PtkkRPiLA6GAl7G9n';
  
      // Send the email
      emailjs.send(serviceId, templateId, { from_email: email, message }, userId)
        .then((response) => {
          console.log('Email sent successfully:', response);
          // Optionally, you can add some logic to show a success message to the user
          // Redirect user to a success page or show a success message
          navigation.navigate('/success'); // Example: Redirect to a success page
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          // Optionally, you can add some logic to show an error message to the user
        });
  
      // Clear form fields after sending
      setEmail('');
      setMessage('');
    };

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Your Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
    <div>
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
    </div>
    <button type="submit">Send</button>
  </form>
  );
};

export default EmailForm;
