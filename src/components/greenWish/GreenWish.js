import s from './GreenWish.module.scss';
import markGreen from './../../assets/img/markGreen.svg';


function GreenWish(props) {
    return (
        <div className={s.greenWish}>
            <img src={markGreen} alt="" className={s.mark}/>
            <span className={s.wish}>Супер! Я бы заказала съемку снова!</span>
        </div>
        
    );
}

export default GreenWish;