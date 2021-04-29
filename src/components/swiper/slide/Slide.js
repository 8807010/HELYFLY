import s from './Slide.module.scss';

function Slide(props) {
    return (
        <div className={s.slide}>
            <div className={s.container}>
                <img src={props.imgNumber} alt="" className={s.numberImg}/>
                <h2 className={s.qustionText}>{props.qustionName}</h2>
                <span className={s.place}>{props.placeName}</span>

            </div>


        </div>

    );
}

export default Slide;