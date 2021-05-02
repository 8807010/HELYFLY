import FiveStars from '../fiveStars/FiveStars';
import s from './Reviews.module.scss';
import markGreen from './../../assets/img/markGreen.svg';


function Reviews(props) {
    return (
        <>
        <div className={s.container}>
            <div className={s.reviews}>
                <img src={props.imgFoto} alt="" className={s.foto}/>
                <span className={s.name}>{props.name}</span>
                <span className={s.job}>{props.job}</span>
                <FiveStars/>
                <div className={s.greenWish}>
                    <img src={markGreen} alt="" className={s.mark}/>
                    <span className={s.wish}>Супер! Я бы заказала съемку снова!</span>
                </div>
                <p className={s.review}>{props.review}</p>
                <span className={s.date}>{s.date}</span>
            </div>
        </div>
        
        </>
    );
}

export default Reviews;