import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/MainForm/MainForm';
import Offer from './components/Offer/Offer';
import Subscribe from './components/Subscribe/Subscribe';
import TourDeals from './components/TourDeals/TourDeals';

function App() {
  return (
    <div>
      <Main></Main>
      {/* <Offer></Offer> */}
      <TourDeals></TourDeals>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
