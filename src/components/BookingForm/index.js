import React from "react";
import "./style.css"

const BookingForm = ()=> {
    return (
    <div className="form-side">
      <form style={{ display: 'grid', gap: '20px' }} className="bookingForm" >
      <label htmlFor="res-custname">First Name</label>
      <input type="text" id="res-custname" />

      <label htmlFor="res-email">Email</label>
      <input type="email" id="res-email" />

      <label htmlFor="res-phone-number">First Name</label>
      <input type="number" id="res-phone-number" />

      <div className="res-col">
      <label htmlFor="res-date">Choose date</label>
        <input type="date" id="res-date" />
        
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
      </div>
        
        <div className="res-col">
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests" />
        
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        </div>


        <label htmlFor="res-msg">Your message:</label>
        <textarea id="res-msg" name="res-msg" rows="4" cols="50"> </textarea>
        
        <input type="submit" value="BOOK NOW" />
      </form>
    </div>
    );
  }
  
  export default BookingForm;
  