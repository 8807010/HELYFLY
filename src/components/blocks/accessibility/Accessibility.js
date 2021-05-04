import s from './Accessibility.module.scss';
import Groupcup from '../../groupcup/Groupcup';
import ButtonChoise from './../../buttonChoise/ButtonChoise';
import btnCal from './../../../assets/img/btnCal.svg';




function Accessibility(props) {
    return (

        <div className={s.container}>
            <h2 className={s.title}>Доступная съемка<br/>в ближайщее время</h2>
            <div className={s.table}> 
                <div className={s.calk}>
                    <p className={s.date}>Пятница, 14 сентября <a href="#" className={s.linkCalk}>
                            <img src={btnCal} alt="calk" className={s.calend}/>
                        </a></p>

                </div>
               

                <div className={s.photographerInfo}>
                    <div className={s.info}>
                        <span className={s.time}>15:00 - 18:00</span>
                        <span className={s.cost}>850$</span>
                        <span className={s.rest}>Осталось — 1 место</span>
                    </div>
                    <div className={s.btn}>
                        <ButtonChoise/>
                    </div>
                </div>
                    

                <div className={s.photographerInfo}>
                    <div className={s.info}>
                        <span className={s.time}>15:00 - 18:00</span>
                        <span className={s.cost}>850$</span>
                        <span className={s.rest}>Осталось — 1 место</span>
                    </div>
                    <div className={s.btn}>
                        <ButtonChoise/>
                    </div>
                    
                </div>
                <div className={s.groupcup}>
                    <Groupcup/>
                </div>
            </div>
        </div>



    );
}

export default Accessibility;