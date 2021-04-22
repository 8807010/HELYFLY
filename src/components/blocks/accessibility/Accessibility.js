import s from './Accessibility.module.scss';
import star from './../../../assets/img/star.png';
import groupcup from './../../../assets/img/groupcup.svg';





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

        <div className={s.reviews}>
                        <img className={s.cap} src={groupcup} alt="cap"/>
                        <div className={s.rating}>
                            <span className={s.reviewsText}>Более 50 отзывов с оценкой </span>
                            <div className={s.starContainer}>
                                <img className={s.star} src={star} alt="star"/>
                                <img className={s.star} src={star} alt="star"/>
                                <img className={s.star} src={star} alt="star"/>
                                <img className={s.star} src={star} alt="star"/>
                                <img className={s.star} src={star} alt="star"/>
                            </div>
                        </div>
                        
                    </div>
             
        
        </>
    );
}

export default Accessibility;