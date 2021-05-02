import s from './Croupcup.module.scss';
import groupcup from './../../assets/img/groupcup.svg';
import FiveStars from '../fiveStars/FiveStars';

function Groupcup() {
    return (
        <>
            <div className={s.reviews}>
                <img className={s.cap} src={groupcup} alt="cap"/>
                <div className={s.rating}>
                    <span className={s.reviewsText}>Более 50 отзывов с оценкой </span>
                    <FiveStars/>
                </div>
                
            </div>
        </>
    );
}

export default Groupcup;