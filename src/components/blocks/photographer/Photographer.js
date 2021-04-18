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

            <div>
                <span>Об организаторе:</span>
                <p>
                    Всем привет! Я фотограф Мария! И по мимо фотосъемки я так же являюсь членом группы экспертов туристической отрасли, которые хорошо разбираются 
                    в маркетинге, операциях 
                    и услугах обслуживания клиентов, специализирующихся 
                    на совместном использовании 
                    и частных турах. 

                    Сначала мы (я и моя команда) изучаем интересы клиентов, а затем придумываем подходящее решение, которое соответствует бюджету и планам клиента. 
                    Мы никогда не зависим 
                    от субпоставщиков 
                    и не свяжемся…
                </p>
                <a href="#" className={s.moreInfo}>Читать еще</a>
                <span>Что я предоставлю:</span>
                <p>
                    Встречу вас на машине после длительного перелёта.
                    Качественный подбор места 
                    и локации для вашей съемки.
                    При необходимости всегда возможно прерваться 
                    на обед/ужин.
                    Более 50 фотографий на выходе 
                    с обработкой и замечательные впечатления о Дубае!  
                </p>
                <a href="#" className={s.moreInfo}>Читать еще</a>
        
            </div>

        </div>
        
        </>
    );
}

export default Photographer;