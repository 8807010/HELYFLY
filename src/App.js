import s from './App.module.scss';
import Accessibility from './components/blocks/accessibility/Accessibility';
import Header from './components/blocks/header/Header';
import Main from './components/blocks/main/Main';
import Package from './components/blocks/package/Package';
import Photographer from './components/blocks/photographer/Photographer';
import Photosession from './components/blocks/photosession/Photosession';
import Map from './components/map/Map'
// import SsimpleSwiper from './components/swiper/SsimpleSwiper';


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
      {/* <SsimpleSwiper/> */}
    </div>
    </>
  );
}

export default App;
