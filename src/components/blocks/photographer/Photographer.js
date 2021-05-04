import s from './Photographer.module.scss';
import photographer from './../../../assets/img/photographer.png';
import ArrowBottom from './../../../assets/img/ArrowBottom.svg';




function Photographer() {
    return (
        <>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.photographerInfo}>
                        <div className={s.like}>
                            <img className={s.ava} src={photographer} alt="photographer"/>
                        </div>
                        <span className={s.name}>Марина Иванова</span>
                        <span className={s.work}>Фотограф</span>
                        <a href="#" className={s.moreInfo}>Показать больше информации о фотографе</a>
                    </div>

                    <div className={s.info}>
                        <div>
                            <h3 className={s.about}>Об организаторе:</h3>
                            <p className={s.aboutText}>
                                Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются 
                                в маркетинге, операциях 
                                и услугах обслуживания клиентов, специализирующихся 
                                на совместном использовании 
                                и частных турах. 
                            </p>
                            <br/>
                            <p className={s.aboutText}>
                                    Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, которое соответствует бюджету и планам клиента. 
                                    Мы никогда не зависим 
                                    от субпоставщиков 
                                    и не свяжемся…
                            </p>
                            <a href="#" className={s.moreInfo}>Читать еще
                                <img className={s.arrow} src={ArrowBottom} alt="arrow" />
                            </a>
                        </div>
                        
                        <div>
                            <h3 className={s.repr}>Что я предоставлю:</h3>
                            <p className={s.aboutText}>
                                Встречу вас на машине после длительного перелёта.
                                Качественный подбор места 
                                и локации для вашей съемки.
                                При необходимости всегда возможно прерваться 
                                на обед/ужин.
                                Более 50 фотографий на выходе 
                                с обработкой и замечательные впечатления о Дубае!  
                            </p>
                            <a href="#" className={s.moreInfo}>Читать еще
                                <img className={s.arrow} src={ArrowBottom} alt="arrow" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>    
        </>    
    
    );
}

export default Photographer;
