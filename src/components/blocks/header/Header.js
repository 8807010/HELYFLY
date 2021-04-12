import s from './Header.module.scss';
import logo from './../../../assets/img/logo.svg';
import userIcon from './../../../assets/img/user.png';



function Header() {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.inner}>
                    <div className={s.wrapper}>
                        <img src={logo} alt="" className={s.logo}/>
                        <a href="tel:+78001231212" className={s.phoneMoscow}>Москва</a>
                        <div className={s.phone}>
                            <span>Телефон:</span>
                            <a href="tel:+78001231212" className={s.phoneLink}>8(800)-123-12-12</a>
                        </div>
                    </div>
                    <a href="#" className={s.user}>
                        <img src={userIcon} alt="" className={s.userImg}/>
                    </a>
                </div>
            </div>
            
        </div>
    );
}

export default Header;