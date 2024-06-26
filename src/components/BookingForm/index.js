import {React, useState} from "react";
import "./style.css"

import { useNavigate, NavigateFunction } from "react-router-dom";

const BookingForm = ()=> {
  const navigate= useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [gstCount, setGstCount] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [message, useMessage] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !phone || !date || !time || !gstCount || !occasion) {
      alert("All fields are required");
      return;
    }

    const bookingData = {
      name,
      email,
      phone,
      date,
      time,
      guests: gstCount,
      occasion,
      message,
    };

    console.log("Booking Data:", bookingData);
    localStorage.setItem("Bookings", JSON.stringify(bookingData));
    navigate("/confirmation");
  };



  const availableTimes = ['17:00','18:00','19:00','20:00','21:00','22:00'];
    return (
    <div className="form-side">
      <form onSubmit={handleSubmit}>
      <label htmlFor="res-custname">First Name:</label>
      <input type="text" id="res-custname" placeholder="Enter your name.." value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="res-email">Email:</label>
      <input type="email" id="res-email" placeholder="Enter your email.." value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="res-phone-number">Phone Number:</label>
      <input type="number" id="res-phone-number" placeholder="Enter your phone number.." value={phone} onChange={(e) => setPhone(e.target.value)} />

      <div className="res-col">
        <div className="res-date-row">
          <label htmlFor="res-date">Date of reservation:</label><br></br>
          <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
        
        <div className="res-time-row">
        <label htmlFor="res-time">Time of reservation:</label><br></br>
        <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
        {availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        </div>
        
      </div>
        
        <div className="res-col">
          <div className="res-gst-row">
            <label htmlFor="guests">Number of guests:</label><br></br>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={gstCount} onChange={(e) => setGstCount(e.target.value)} />
          </div>
        
          <div className="res-occ-row">
            <label htmlFor="occasion">Occasion:</label><br></br>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="engagement">Engagement</option>
            </select>
          </div>
        </div>


        <label htmlFor="res-msg">Your message:</label>
        <textarea id="res-msg" name="res-msg" rows="4" cols="50" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        
        <input type="submit" value="BOOK NOW" className="submitBtn" />
      </form>
    </div>
    );
  }
  
  export default BookingForm;
  