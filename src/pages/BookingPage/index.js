import Header from '../../components/Header/index'
import BookingForm from '../../components/BookingForm';
import Footer from '../../components/Footer/index';

import "./style.css"
const BookingPage = ()=> {
  return (
    <div className="bookingPage">
     <Header/>
     <BookingForm/>
     <Footer/>
    </div>
  );
}

export default BookingPage;
