import s from './ReviewsBlock.module.scss';
import Reviews from './../../components/reviews/Reviews';
import review1 from './../../assets/img/rewiew1.png';
import review2 from './../../assets/img/review2.png';
import review3 from './../../assets/img/review3.png';




function ReviewsBlock() {
    const data0 = {
        imgFoto: review1,
        name: 'Валерия Антонова',
        job: 'Арт-директор',
        review: 'Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!',
        date: '27 Апреля, 2019г.'
    }
    const data1 = {
        imgFoto: review2,
        name: 'Виталий Петров',
        job: 'Фотограф',
        review: 'Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. Организация полёта отличная. Спасибо!',
        date: '19 Апреля, 2019г.'
    }

    const data2 = {
        imgFoto: review3,
        name: 'Джим Керри',
        review: 'Круто-круто-круто!!! Отмечали мой ДэРэ. Отлично провели время!!! Кстати закуски были вкусными и сытными))Мы с собой ничего не брали. Сами много фоткались,поэтому воспоминания обалденные!!!)) А еще нам всем напечатали по сертификату воздухоплавателя, правда некоторые ленятся за ним съездить))) Но все равно приятно. Короче, Презентстар – проверено. Оценка: пять!',
        date: '11 Апреля, 2019г.'
    }
    

    return (
        <>

        <div className={s.reviewsBlock}>
            <div className={s.container}>
                <div className={s.inner}>
                    <Reviews
                        imgFoto={data0.imgfoto}
                        name={data0.name}
                        job={data0.job}
                        review={data0.review}
                        date={data0.date}
                    />
                    <Reviews
                        imgFoto={data1.imgfoto}
                        name={data1.name}
                        job={data1.job}
                        review={data1.review}
                        date={data1.date}
                    />
                    <Reviews
                        imgFoto={data2.imgfoto}
                        name={data2.name}
                        review={data2.review}
                        date={data2.date}
                    />

                </div>
            </div>
                
        </div>    
        </>    

    );
}

export default ReviewsBlock;