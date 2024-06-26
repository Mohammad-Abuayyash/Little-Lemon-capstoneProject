import React from "react";
import "./style.css"


const BookingForm = ()=> {
    return (
    <div className="form-side">
      <form>
      <label htmlFor="res-custname">First Name:</label>
      <input type="text" id="res-custname" placeholder="Enter your name.." />

      <label htmlFor="res-email">Email:</label>
      <input type="email" id="res-email" placeholder="Enter your email.."/>

      <label htmlFor="res-phone-number">Phone Number:</label>
      <input type="number" id="res-phone-number" placeholder="Enter your phone number.."/>

      <div className="res-col">
        <div className="res-date-row">
          <label htmlFor="res-date">Date of reservation:</label><br></br>
          <input type="date" id="res-date" />
        </div>
        
        <div className="res-time-row">
        <label htmlFor="res-time">Time of reservation:</label><br></br>
        <select id="res-time">
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        </div>
        
      </div>
        
        <div className="res-col">
          <div className="res-gst-row">
            <label htmlFor="guests">Number of guests:</label><br></br>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />
          </div>
        
          <div className="res-occ-row">
            <label htmlFor="occasion">Occasion:</label><br></br>
            <select id="occasion">
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>
        </div>


        <label htmlFor="res-msg">Your message:</label>
        <textarea id="res-msg" name="res-msg" rows="4" cols="50"> </textarea>
        
        <input type="submit" value="BOOK NOW" className="submitBtn" />
      </form>
    </div>
    );
  }
  
  export default BookingForm;
  