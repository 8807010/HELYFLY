import s from './Photographer.module.scss';
import photographer from './../../../assets/img/photographer.png';




function Photographer() {
    return (
        <>
        <div className={s.container}>
            <div className={s.photographerInfo}>
                <img className={s.ava} src={photographer} alt="photographer"/>
                <span className={s.name}>Марина Иванова</span>
                <span className={s.work}>Фотограф</span>
                <a href="#" className={s.moreInfo}>Показать больше информации о фотографе</a>

            </div>

        </div>
        
        </>
    );
}

export default Photographer;