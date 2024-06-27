import React, { useState, useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ availableTimes, dispatch }) => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [gstCount, setGstCount] = useState(1);
  const [occasion, setOccasion] = useState('birthday');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (availableTimes.times.length > 0) {
      setTime(availableTimes.times[0]);
    }
  }, [availableTimes]);

  useEffect(() => {
    if (date) {
      dispatch({ type: 'UPDATE_TIMES', date: new Date(date) });
    }
  }, [date, dispatch]);

  const validate = () => {
    const newErrors = {};

    if (!name)
      newErrors.name = ' Required';
    else{
      const nums = ['0','1','2','3','4','5','6','7','8','9'];
      for(let i =0;i<nums.length;i++)
        if(name.includes(nums[i]))
          newErrors.name = ' (should only have characters)';
    }
    if (!email) {
      newErrors.email = ' Required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = ' Invalid';
    }
    if (!phone) {
      newErrors.phone = ' Required';
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = ' (must be 10 digits)';
    }
    if (!date) newErrors.date = ' Required';
    if (!time) newErrors.time = ' Required';
    if (!gstCount || gstCount < 1 || gstCount > 10) {
      newErrors.gstCount = ' Number of guests must be between 1 and 10';
    }
    if (!occasion) newErrors.occasion = ' Occasion is required';

    return newErrors;
  };

  const submitAPI = (formData) => {
    console.log("Submitting form data:", formData);
    return true;  // Simulate successful submission
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
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

    const response = submitAPI(bookingData);
    if (response) {
      localStorage.setItem("Bookings", JSON.stringify(bookingData));
      navigate("/confirmation");
    } else {
      alert("Failed to submit booking");
    }
  };

  return (
    <div className="form-side">
      <form onSubmit={handleSubmit}>
        <label htmlFor="res-custname">Full Name:{errors.name  && <span className="error-message">{errors.name}</span>}</label>
        <input
          type="text"
          id="res-custname"
          placeholder="Enter your name.."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? 'error' : ''}
          title={errors.name}
        />

        <label htmlFor="res-email">Email: {errors.email && <span className="error-message">{errors.email}</span>}</label>
        <input
          type="email"
          id="res-email"
          placeholder="Enter your email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? 'error' : ''}
          title={errors.email}
        />

        <label htmlFor="res-phone-number">Phone Number:{errors.phone && <span className="error-message">{errors.phone}</span>}
        </label>
        <input
          type="number"
          id="res-phone-number"
          placeholder="Enter your phone number.."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={errors.phone ? 'error' : ''}
          title={errors.phone}
        />

        <div className="res-col">
          <div className="res-date-row">
            <label htmlFor="res-date">Date of reservation:{errors.date && <span className="error-message">{errors.date}</span>} </label><br />
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={errors.date ? 'error' : ''}
              title={errors.date}
            />
          </div>

          <div className="res-time-row">
            <label htmlFor="res-time" >Time of reservation:{errors.time && <span className="error-message">{errors.time}</span>}</label><br />
            <select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className={errors.time ? 'error' : ''}
              title={errors.time}
            >
              {availableTimes.times.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="res-col">
          <div className="res-gst-row">
            <label htmlFor="guests">Number of guests:{errors.gstCount && <span className="error-message">{errors.gstCount}</span>}
            </label><br />
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              value={gstCount}
              onChange={(e) => setGstCount(e.target.value)}
              className={errors.gstCount ? 'error' : ''}
              title={errors.gstCount}
            />
          </div>

          <div className="res-occ-row">
            <label htmlFor="occasion">Occasion:</label><br />
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              className={errors.occasion ? 'error' : ''}
              title={errors.occasion}
            >
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="engagement">Engagement</option>
            </select>
            {errors.occasion && <span className="error-message">{errors.occasion}</span>}
          </div>
        </div>

        <label htmlFor="res-msg">Your message:</label>
        <textarea
          id="res-msg"
          name="res-msg"
          rows="4"
          cols="50"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <input type="submit" value="BOOK NOW" className="submitBtn" />
      </form>
    </div>
  );
};

export default BookingForm;
