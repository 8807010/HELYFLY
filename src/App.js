import s from './App.module.scss';
import Accessibility from './components/blocks/accessibility/Accessibility';
import Footer from './components/blocks/footer/Footer';
import Header from './components/blocks/header/Header';
import Main from './components/blocks/main/Main';
import Package from './components/blocks/package/Package';
import Photographer from './components/blocks/photographer/Photographer';
import Photosession from './components/blocks/photosession/Photosession';
import Map from './components/map/Map';
import ReviewsBlock from './components/reviewsBlock/ReviewsBlock';



function App() {
  return (
    <>
    <div className={s.App}>
      <Header/>
      <Main/>
      <Photosession/>
      <Package/>
      <Photographer/>
      <Accessibility/>
      <Map/>
      <ReviewsBlock/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
