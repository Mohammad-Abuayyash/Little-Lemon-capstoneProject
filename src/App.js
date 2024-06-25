import './App.css';
import Header from './components/Header/index';
import CallToAction from './components/CallToAction/index';
import Specials from './components/Specials/index';
import Footer from './components/Footer/index';
function App() {
  return (
    <>
     <Header/>
      <CallToAction />
      <Specials />
      {/*<CustomersReveiws />
      <Chicago /> */}
     <Footer/>
    </>
  );
}

export default App;
