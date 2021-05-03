import s from './Accessibility.module.scss';
import Groupcup from '../../groupcup/Groupcup';
import ButtonChoise from './../../buttonChoise/ButtonChoise';





function Accessibility(props) {
    return (
        <>
        <div className={s.container}>
            <div className={s.photographerInfo}>
                <h2 className={s.title}>Доступная съемка<br/>в ближайщее время</h2>
                <div>
                    <span className={s.date}>Пятница, 14 сентября</span>
                    <span className={s.time}>15:00 - 18:00</span>
                    <span className={s.cost}>850$</span>
                    <span className={s.rest}>Осталось — 1 место</span>
                    <ButtonChoise/>
                </div>
                
            </div>

            <div className={s.photographerInfo}>
                <span className={s.time}>15:00 - 18:00</span>
                <span className={s.cost}>850$</span>
                <span className={s.rest}>Осталось — 1 место</span>
                <ButtonChoise/>
            </div>

        </div>

        <Groupcup/>

        
        </>
    );
}

export default Accessibility;