import React from 'react';


const Header = () => { 

 

    return (

      <header className="page__header header">
      <div className="container">
          <div className="header__wrapper">

              <a href="index.htm" className="header__logo">
                  <img src="local/templates/interguest/assets/images/icons/logo.svg" alt="logo"></img>
              </a>
              <div className="header__address">Москва, ул. Молодогвардейская, 63-65</div>
              <div className="header__activities">

                  <a href="tel:+79684400600" className="phone">
                      <svg className="icon">
                          <use
                              xlinkHref="/local/templates/interguest/assets/svg-sprite/svg-sprite.svg#phone">
                          </use>
                      </svg>
                      <span>+7 (968) 4-400-600</span>
                  </a>
                  <div className="language">
                      <label className="language__item language__item--ru">
                          <input className="js-site-version-redirect" type="radio"  name="lang" id="ru"
                              data-redirect="/"></input>
                          <span className="language__btn">
                              <span>ru</span>
                          </span>
                      </label>
                      <label className="language__item language__item--en">
                          <input className="js-site-version-redirect" type="radio" name="lang" id="en"
                              data-redirect="/en/"></input>
                          <span className="language__btn">
                              <span>en</span>
                          </span>
                      </label>
                  </div>

                  <div className="menu">
                      <button type="button" title="Hotel" className="burger go-js-burger">
                          <span></span>
                      </button>

                      <ul className="menu__list">
                          <li className="menu__item">
                              <a href="index.htm#section-1" className="menu__link">Номера</a>
                          </li>
                          <li className="menu__item">
                              <a href="index.htm#section-2" className="menu__link">Услуги</a>
                          </li>
                          <li className="menu__item">
                              <a href="index.htm#section-3" className="menu__link">Преимущества</a>
                          </li>
                          <li className="menu__item">
                              <a href="index.htm#section-4" className="menu__link">Контакты</a>
                          </li>
                      </ul>
                  </div>

              </div>
          </div>
      </div>
  </header>
    );

    
};

export default Header;