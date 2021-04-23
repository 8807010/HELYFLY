import s from './Accessibility.module.scss';
import Groupcup from '../../groupcup/Groupcup';





function Accessibility(props) {
    return (
        <>
        <div className={s.container}>
            <div className={s.photographerInfo}>
                <h2 className={s.title}>Доступная съемка в ближайщее время</h2>
                <span>Пятница, 14 сентября</span>
                <span>15:00 - 18:00</span>
                <span>850$</span>
                <span>Осталось — 1 место</span>
                <button>Выбрать</button>
            </div>

            <div className={s.photographerInfo}>
                <span>15:00 - 18:00</span>
                <span>850$</span>
                <span>Осталось — 1 место</span>
                <button>Выбрать</button>
            </div>

        </div>

        <Groupcup/>

        
        </>
    );
}

export default Accessibility;