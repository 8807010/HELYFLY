import s from './App.module.scss';
import Header from './components/blocks/header/Header';
import Main from './components/blocks/main/Main';
import Photosession from './components/blocks/photosession/Photosession';

function App() {
  return (
    <>
    <div className={s.App}>
      <Header/>
      <Main/>
      <Photosession/>
    </div>
    </>
  );
}

export default App;
