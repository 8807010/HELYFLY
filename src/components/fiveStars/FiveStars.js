import s from './FiveStars.module.scss';
import star from './../../assets/img/star.png';


function FiveStars(props) {
    return (
        <div className={s.starContainer}>
            <img className={s.star} src={star} alt="star"/>
            <img className={s.star} src={star} alt="star"/>
            <img className={s.star} src={star} alt="star"/>
            <img className={s.star} src={star} alt="star"/>
            <img className={s.star} src={star} alt="star"/>
        </div>
        
    );
}

export default FiveStars;