import s from './Footer.module.scss';
import logo from './../../../assets/img/logo.svg';
import VK from './../../../assets/img/vk.png';
import FB from './../../../assets/img/Facebook.png';
import INSTAGRAM from './../../../assets/img/Instragram.png';
import MC from './../../../assets/img/MC.png';
import VISA from './../../../assets/img/VISA.png';
import ArrowBottom from './../../../assets/img/ArrowBottom.svg';


function Footer() {
    return (
        <div className={s.footer}>
                <div className={s.footerTop}>
                    <div className={s.container}>
                        <div className={s.topInner}>
                            <img src={logo} alt="" className={s.logo}/>
                            <div className={s.socials}>
                                <a href="#" className={s.socialsLink}>
                                    <img src={VK} alt="vk" className={s.vk}/>
                                </a>
                                <a href="#" className={s.socialsLink}>
                                    <img src={FB} alt="facebook" className={s.facebook}/>
                                </a>
                                <a href="#" className={s.socialsLink}>
                                    <img src={INSTAGRAM} alt="instagram" className={s.instagram}/>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className={s.footerBottomMob}>
                    <div className={s.container}>
                        <div className={s.footerBottomSmall}>
                            <div className={s.payments}>
                                <img src={MC} alt="mc" className={s.mc}/>
                                <img src={VISA} alt="visa" className={s.visa}/>
                            </div>
                            <div className={s.language}>
                                <span className={s.lan}>RU</span>
                                <img className={s.arrow} src={ArrowBottom} alt="arrow" />
                            </div>
                        </div>
                        <p className={s.footerText}>
                            Тех. поддержка: 8(800)700-00-00 <br/>
                            &copy; 2018 HELYFLY. All Rights Reserved.
                        </p>
                    </div>
                </div>

                <div className={s.footerBottom}>
                    <div className={s.container}>
                        <div className={s.inner}>
                            <div className={s.payments}>
                                <img src={MC} alt="mc" className={s.mc}/>
                                <img src={VISA} alt="visa" className={s.visa}/>
                            </div>
                            <p className={s.footerText}>
                                Тех. поддержка: 8(800)700-00-00 <br/>
                                &copy; 2018 HELYFLY. All Rights Reserved.
                            </p>
                            <div className={s.language}>
                                <span className={s.lan}>RU</span>
                                <img className={s.arrow} src={ArrowBottom} alt="arrow" />
                            </div>
                        </div>
                    </div>
                </div>
                
                
        </div>
    
    );
}

export default Footer;