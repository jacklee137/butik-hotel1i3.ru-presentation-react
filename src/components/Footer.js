import React from 'react';

function Footer(){
    return (
	
		<footer id="section-4" className="page__footer footer section">
                <div className="contacts">
                    <div className="container">
                        <div className="contacts__wrapper">


                            <h2 className="title section__title">Kонтакты</h2>
                            <div className="contacts__box">
                                <div className="contacts-list" >
                                    <div className="contacts-list__section">
                                        <span >Россия, Москва, ул. Молодогвардейская,
                                            63-65</span>
                                    </div>
                                    <div className="contacts-list__section">
                                        <ul>
                                            <li>
                                                <a href="mailto:molodezhkahotel@gmail.com" >
                                                    <svg className="icon">
                                                        <use
                                                            xlinkHref="/local/templates/interguest/assets/svg-sprite/svg-sprite.svg#male">
                                                        </use>
                                                    </svg>
                                                    molodezhkahotel@gmail.com </a>
                                            </li>
                                            <li>
                                                <a href="tel:+79684400600" >
                                                    <svg className="icon">
                                                        <use
                                                            xlinkHref="/local/templates/interguest/assets/svg-sprite/svg-sprite.svg#phone">
                                                        </use>
                                                    </svg>
                                                    +7 (968) 4-400-600 </a>
                                            </li>
                                            <li>
                                                <a href="https://wa.me/+796000400600">
                                                    <svg className="icon">
                                                        <use
                                                            xlinkHref="/local/templates/interguest/assets/svg-sprite/svg-sprite.svg#whatsup">
                                                        </use>
                                                    </svg>
                                                    WhatsApp
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="contacts__map" id="map"></div>



									{/* <div className="main-contacts">
										<ul className="main-contacts__inner">
											<li className="main-contacts__list">
												МЕТРО РЯДОМ:
											</li>

											<li className="main-contacts__list">
												<a href="krylatskoe/index.htm" className="main-contacts__link">Крылатское</a>
											</li>

											<li className="main-contacts__list">
												<a href="kuntsevo/index.htm" className="main-contacts__link">Кунцево</a>
											</li>

											<li className="main-contacts__list">
												<a href="molodezhnaya/index.htm" className="main-contacts__link">Молодежная</a>
											</li>

											<li className="main-contacts__list">
												<a href="pionerskaya/index.htm" className="main-contacts__link">Пионерская</a>
											</li>

											<li className="main-contacts__list">
												<a href="slavyanskiy-bulvar/index.htm?"
													className="main-contacts__link">Славянский бульвар</a>
											</li>
										</ul>
									</div> */}

                            </div>

                            <div className="contacts__info__wrapper">
                                <div className="contacts__info contact-info">
                                    <div className="contact-info__section contact-info__section-right">

                                        <div className="info-us">
                                            <span className="info-us__name">Мы на </span>
                                            <ul className="info-us__list">
                                                <li className="info-us__item">
                                                    <a href="https://bronevik.com/ru/hotel/ru"
                                                        className="info-us__link">Bronevik</a>
                                                </li>
                                                <li className="info-us__item">
                                                    <a href="https://ostrovok.ru/hotel/russia/moscow/mid10211089/"
                                                        className="info-us__link">Ostrovok</a>
                                                </li>
                                                <li className="info-us__item">
                                                    <a href="https://www.onetwotrip.com/ru/hotel"
                                                        className="info-us__link">OneTwoTrip</a>
                                                </li>
                                                <li className="info-us__item">
                                                    <a href="https://academservice.ru/online/r"
                                                        className="info-us__link">Академсервис</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="info-payments"><img src="local/images/logo4h.png" alt="payments"></img></div>
                                </div>
                                <div className="contacts__info contact-info flex">
                                    <div className="contact-info__section">

                                        <ul className="info-details">
                                            <li className="info-details__item">
                                                <a href="dogovor-oferty/index.htm" className="info-details__link">Договор
                                                    оферты</a>
                                            </li>
                                            <li className="info-details__item">
                                                <a href="pravila-prozhivaniya/index.htm"
                                                    className="info-details__link">Правила проживания</a>
                                            </li>
                                            <li className="info-details__item">
                                                <a href="politika-konfidentsialnosti/index.htm"
                                                    className="info-details__link">Политика конфиденциальности</a>
                                            </li>
                                            <li className="info-details__item">
                                                <a href="oplata/index.htm" className="info-details__link">Оплата</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <div className="container">
                        <span className="copyright">©️ Молодёжка Гостиница, 2023. Все права защищены</span>
                    </div>
                </div>
            </footer>

		  

        
    );
};

export default Footer;