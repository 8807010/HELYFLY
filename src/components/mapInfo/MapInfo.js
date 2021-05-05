import s from './MapInfo.module.scss';
import numberOne from './../../assets/img/number-1.svg';
import numberTwo from './../../assets/img/number-2.svg';
import numberThree from './../../assets/img/number-3.svg';
import photographer from './../../assets/img/photographer.png';




function MapInfo() {
    return (
        <>
        <div className={s.container}>
            <div className={s.mapInfo}>
                <div className={s.wrapper}>
                    <div className={s.inner}>
                        <div className={s.foto}>
                            <img src={numberOne} alt="" className={s.numberImg}/>
                        </div>
                        <div className={s.info}>
                            <h2 className={s.qustionText}>Где встречаемся?</h2>
                            <p className={s.place}>Москва</p>
                        </div>
                    </div>

                    <div className={s.inner}>
                        <div className={s.foto}>
                            <img src={numberTwo} alt="" className={s.numberImg}/>
                        </div>
                        <div className={s.info}>
                            <h2 className={s.qustionText}>Время съемки</h2>
                            <p className={s.place}>3 часа</p>
                        </div>
                    </div>

                    <div className={s.inner}>
                        <div className={s.foto}>
                            <img src={numberThree} alt="" className={s.numberImg}/>
                        </div>
                        <div className={s.info}>
                            <h2 className={s.qustionText}>Мест осталось:</h2>
                            <p className={s.place}>2 места</p>
                        </div>
                    </div>

                    <div className={s.inner}>
                        <div className={s.foto}>
                            <img className={s.ava} src={photographer} alt="photographer"/>
                        </div>
                        <div>
                            <p className={s.name}>Марина Иванова</p>
                            <p className={s.work}>Фотограф</p>
                            <a href="#" className={s.moreInfo}>Показать больше информации</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            
            
        </>
        
    );
}

export default MapInfo;