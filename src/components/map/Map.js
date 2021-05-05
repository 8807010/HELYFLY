import MapSlider from '../swiper/MapSlider';
import s from './Map.module.scss';
import photographer from './../../assets/img/photographer.png';
import MapInfo from '../mapInfo/MapInfo';


function Map() {
    return (
        <>
        <div className={s.map}>
            <div className={s.inner}> 
            <div className={s.container}>
                    <div className={s.mapInfo}>
                        <MapInfo/>
                    </div>
                </div>
               
            </div>
                <div className={s.wrapper}>
                    <div className={s.container}>
                        <div className={s.slider}>
                            <MapSlider/>
                            <div className={s.photographerInfo}>
                                <div className={s.like}>
                                    <img className={s.ava} src={photographer} alt="photographer"/>
                                </div>
                                <div className={s.phInfo}>
                                    <span className={s.name}>Марина Иванова</span>
                                    <span className={s.work}>Фотограф</span>
                                    <a href="#" className={s.moreInfo}>Показать больше информации <br/>о фотографе</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
}

export default Map;