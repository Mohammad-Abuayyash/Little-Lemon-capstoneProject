import Header from '../../components/Header/index'
import ConfirmedBooking from '../../components/ConfirmedBooking/index';
import Footer from '../../components/Footer/index';

const ConfirmationPage = ()=> {
  return (
    <div className='ConfirmPage'>
     <Header/>
     <ConfirmedBooking/>
     <Footer/>
    </div>
  );
}

export default ConfirmationPage;
