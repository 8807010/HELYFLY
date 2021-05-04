import s from './Croupcup.module.scss';
import groupcup from './../../assets/img/groupcup.svg';
import star from './../../assets/img/star.png';
import FiveStars from '../fiveStars/FiveStars';

function Groupcup() {
    return (
        <>
            <div className={s.reviews}>
                <img className={s.cap} src={groupcup} alt="cap"/>
                <div className={s.rating}>
                    <p className={s.reviewsText}>Более 50 отзывов с оценкой </p>
                    <div className={s.stars}>
                        <FiveStars/>
                    </div>
                    
                </div>
                
            </div>
        </>
    );
}

export default Groupcup;