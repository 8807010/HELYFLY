import s from './Croupcup.module.scss';
import groupcup from './../../assets/img/groupcup.svg';
import star from './../../assets/img/star.png';

function Groupcup() {
    return (
        <>
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

export default Groupcup;