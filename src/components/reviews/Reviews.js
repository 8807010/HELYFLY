import FiveStars from '../fiveStars/FiveStars';
import GreenWish from '../greenWish/GreenWish';
import s from './Reviews.module.scss';



function Reviews(props) {
    return (
        <>
        <div className={s.container}>
            <div className={s.reviews}>

                <div className={s.mainInfo}>
                    <div className={s.fotoInfo}>
                        <div className={s.imgFoto}>
                            <img className={s.foto} src={props.imgFoto} alt="ava" />
                        </div>
                        <div className={s.info}>
                            <p className={s.name}>{props.name}</p>
                            <p className={s.job}>{props.job}</p>
                            <FiveStars/>
                        </div>
                    </div>
                    <GreenWish/>
                    <p className={s.text}>{props.review}</p>
                    <p className={s.date}>{props.date}</p>
                </div>





                <div className={s.starAndWish}>
                    <div className={s.imgFoto}>
                        <img className={s.foto} src={props.imgFoto} alt="ava" />
                    </div>
                    <div className={s.mainBlock}>
                        <div className={s.common}>
                            <p className={s.name}>{props.name}</p>
                            <p className={s.job}>{props.job}</p>
                            <div className={s.both}>
                                <div className={s.stars}>
                                     <FiveStars/>
                                </div>
                               
                                <GreenWish/>    
                            </div>
                        </div>
                        <p className={s.text}>{props.review}</p>
                        <p className={s.date}>{props.date}</p>
                    </div>
                    
                </div>

                
            </div>
        </div>
        
        </>
    );
}

export default Reviews;