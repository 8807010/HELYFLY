import s from './Photosession.module.scss';
import photosession from './../../../assets/img/photosession-bg.jpg';
import oclock from './../../../assets/img/oclock.png';
import photograph from './../../../assets/img/photograph.svg';
import marked from './../../../assets/img/marked.svg';
import speech from './../../../assets/img/speech.svg';
import PhotosessionPrice from './photosessionPrice/PhotosessionPrice';
import Groupcup from '../../groupcup/Groupcup';



function Photosession() {
    const data0 = {
        foto: oclock,
        title: '3 часа съемки'
    }
    const data1 = {
        foto: photograph,
        title: 'Более 50 фотографий'
    }
    const data2 = {
        foto: marked,
        title: 'Москва'
    }
    const data3 = {
        foto: speech,
        title: 'Готовы ответить на любые вопросы'
    }

    return (
        <>

        <div className={s.photosession}>
            <div className={s.container}>
                <div className={s.inner}>
                    <h2 className={s.title}>Фотосессия в вертолете</h2>
                    <img className={s.photosessionImg} src={photosession} alt="photosession"/>
                    <p className={s.text}>Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит лучшие моменты!</p>
                    <div className={s.photosessionPrice}>
                        <PhotosessionPrice
                            foto={data0.foto}
                            title={data0.title}
                        />
                        <PhotosessionPrice
                            foto={data1.foto}
                            title={data1.title}
                        />
                        <PhotosessionPrice
                            foto={data2.foto}
                            title={data2.title}
                        />
                        <PhotosessionPrice
                            foto={data3.foto}
                            title={data3.title}
                        />
                    </div>
                    <div className={s.groupcup}>
                        <Groupcup/>
                    </div>
                   

                </div>
            </div>
                
        </div>    
        </>    

    );
}

export default Photosession;