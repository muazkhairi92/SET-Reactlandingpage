// import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Accomodation from './components/Accomodation';
import Activities from "./components/Activities";
import Footer from './components/Footer';
import Main from "./components/Main";
import Partners from './components/Partners';
import Review from './components/Review';


function App() {
  return (
    <div>
  <Main/>
  <Activities/>
  <AboutUs/>
  <Accomodation/>
  <Partners/>
  <Review/>
  <Footer/>
</div>
  );
}

export default App;
