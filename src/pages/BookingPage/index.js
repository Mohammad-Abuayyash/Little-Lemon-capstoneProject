import React, { useReducer, useEffect } from 'react';
import Header from '../../components/Header/index'
import BookingForm from '../../components/BookingForm';
import Footer from '../../components/Footer/index';

const BookingPage = ()=> {

const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = (date) => {
  const result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};


  const initializeTimes =  () => {
    const today = new Date();
    return fetchAPI(today);
  };

  const updateTimes =  (state, action) => {  
      switch (action.type) {
      case 'UPDATE_TIMES':
        return { ...state, times: fetchAPI(action.date) };
      default:
        return state;
    }
  };


  const [availableTimes, dispatch] = useReducer(updateTimes, { times: initializeTimes() });

  useEffect(() => {
    const times = initializeTimes();
    dispatch({ type: 'INITIALIZE_TIMES', times });
  }, []);
  
  return (
    <div className="bookingPage">
     <Header/>
     <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
     <Footer/>
    </div>
  );
}

export default BookingPage;
