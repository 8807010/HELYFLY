import FiveStars from '../fiveStars/FiveStars';
import GreenWish from '../greenWish/GreenWish';
import s from './Reviews.module.scss';



function Reviews(props) {
    return (
        <>
        <div className={s.container}>
            <div className={s.reviews}>
                <div className={s.mainInfo}>
                    <img className={s.foto} src={props.imgFoto} alt="ava" />
                    <div className={s.info}>
                        <span className={s.name}>{props.name}</span>
                        <span className={s.job}>{props.job}</span>
                        <FiveStars/>
                    </div>
                    <GreenWish/>
                </div>

                <div className={s.starAndWish}>
                    <FiveStars/>
                    <GreenWish/>
                </div>

                <p className={s.text}>{props.review}</p>
                <span className={s.time}>{s.date}</span>
            </div>
        </div>
        
        </>
    );
}

export default Reviews;