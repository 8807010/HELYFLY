import s from './App.module.scss';
import Header from './components/blocks/header/Header';
import Main from './components/blocks/main/Main';
import Package from './components/blocks/package/Package';
import Photographer from './components/blocks/photographer/Photographer';
import Photosession from './components/blocks/photosession/Photosession';


function App() {
  return (
    <>
    <div className={s.App}>
      <Header/>
      <Main/>
      <Photosession/>
      <Package/>
      <Photographer/>
    </div>
    </>
  );
}

export default App;
