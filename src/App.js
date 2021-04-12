import s from './App.module.scss';
import Header from './components/blocks/header/Header';
import Main from './components/blocks/main/Main';

function App() {
  return (
    <>
    <div className={s.App}>
      <Header/>
      <Main/>
    </div>
    </>
  );
}

export default App;
