import s from './PhotosessionPrice.module.scss';


const PhotosessionPrice = (props) => {
    return (
        <div className={s.photosessionPrice}>
            <img className={s.foto} src={props.foto} alt={'#'}/>
            <span className={s.title}>{props.title}</span>
        </div>
    );
}

export default PhotosessionPrice;