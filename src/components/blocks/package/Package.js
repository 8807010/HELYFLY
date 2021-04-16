import s from './Package.module.scss';
import packagePhotoEarth from './../../../assets/img/packagePhotoEarth.jpg';
import packagePhotoGirl from './../../../assets/img/packagePhotoGirl.jpg';
import packagePhotoHely from './../../../assets/img/packagePhotoHely.jpg';
import packagePhotoKiss from './../../../assets/img/packagePhotoKiss.jpg';


function Package() {
    return (
        <>
        <div className={s.container}>
            <h2 className={s.title}>Фотографии пакета</h2>
                <div className={s.packageSlider}>
                    <img className={s.packageImg} src={packagePhotoEarth} alt="PhotoEarth"/>
                    <img className={s.packageImg} src={packagePhotoEarth} alt="PhotoEarth"/>
                    <img className={s.packageImg} src={packagePhotoGirl} alt="PhotoGirl"/>
                    <img className={s.packageImg} src={packagePhotoGirl} alt="PhotoGirl"/>
                    <img className={s.packageImg} src={packagePhotoHely} alt="PhotoHely"/>
                    <img className={s.packageImg} src={packagePhotoHely} alt="PhotoHely"/>
                    <img className={s.packageImg} src={packagePhotoKiss} alt="PhotoKiss"/>
                    <img className={s.packageImg} src={packagePhotoKiss} alt="PhotoKiss"/>
                </div>
        </div>
        
        </>
    );
}

export default Package;