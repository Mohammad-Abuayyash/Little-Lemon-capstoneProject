import confirmLogo from '../../assets/confirm.png';
import './style.css'

const ConfirmedBooking = ()=> {
  return (
    <div className="confirm-form-side">
        <section className="confirm-box">
            <img src={confirmLogo} alt='Confirm Logo'></img>
            <h2>Your reservation has been confirmed!</h2>
            <h4>We look forward to welcoming you.</h4>
            <h4>Feel free to review your reservation details in the profile section.</h4>
        </section>
    </div>
  );
}

export default ConfirmedBooking;
