import './App.css';
import Header from './components/Header/index';
import CallToAction from './components/CallToAction/index';
import Specials from './components/Specials/index';
import CustomersReviews from './components/CustomersReviews/index';
import Chicago from './components/Chicago/index';
import Footer from './components/Footer/index';
function App() {
  return (
    <>
     <Header/>
      <CallToAction />
      <Specials />
      <CustomersReviews />
      <Chicago />
     <Footer/>
    </>
  );
}

export default App;
