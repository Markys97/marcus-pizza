import './style/app.css'
import { useEffect } from 'react';

function App() {
    // set bottom position trie body
    useEffect(()=>{
        const trieBody = document.querySelector('.trie__body')
        const trieBodyHeight = parseFloat(getComputedStyle(trieBody).height);
        trieBody.style.bottom = `-${trieBodyHeight + 8}px`
      
    })
    return (
      <div className="App">
        <header className="header">
            <div className="header__container wrapper">
                <div className="header__content">
                    <div className="header__row">
                        <div className="header__left">
                            <div className="header__logo logo">
                                <div className="logo__row">
                                    <div className="logo__img">
                                        <img src="/images/utils/logo.png" alt="logo react pizza app" />
                                    </div>
                                    <div className="logo__body">
                                        <div className="logo__title">REACT PIZZA</div>
                                        <div className="logo__subtitle">самая вкусная пицца во вселенной</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header__right">
                             <button className="button-cart">
                                <div className="button-cart__row">
                                    <div className="button-cart__price">520 ₽</div>
                                    <div className="button-cart__info">
                                        <div className="button-cart__icon">
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                                <path d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="button-cart__quantity">3</div>
                                    </div>
                                </div>
                             </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main className='home'>
            <div className="home__container wrapper">
                <div className="home__content">
                    <div className="home__setting">
                        <div className="filter">
                            <div className="filter__content">
                                <div className="filter__scroll">
                                    <div className="filter__row">
                                        <div className="item-filter active">
                                            Все
                                        </div>
                                        <div className="item-filter">
                                            Мясные
                                        </div>
                                        <div className="item-filter">
                                            Мясные
                                        </div>
                                        <div className="item-filter">
                                            Мясные
                                        </div>
                                        <div className="item-filter">
                                            Мясные
                                        </div>
                                        <div className="item-filter">
                                            Мясные
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="trie">
                            <div className="trie__content">
                                <div className="trie__head">
                                    <div className="trie__row">
                                        <div className="trie__title">
                                            <div className="trie__title-icon">
                                                <img src="/images/utils/icon-fleche.png" alt="icon" />
                                            </div>
                                            <div className="trie__title-text">
                                                Сортировка по:
                                            </div>
                                        </div>
                                        <div className="trie__result">
                                            популярности
                                        </div>
                                    </div>
                                </div>
                                <ul className="trie__body">
                                    <li className="trie__body-item active">популярности</li>
                                    <li className="trie__body-item">по цене</li>
                                    <li className="trie__body-item">по алфавиту</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <section className="home-main">
                        <div className="home-main__content">
                            <h2 className="home-main__title">Все пиццы</h2>
                            <div className="list-product">
                                <div className="list-product__row">
                                    <div className="product">
                                        <div className="product__content">
                                            <div className="product__head">
                                                <div className="product__img">
                                                    <img src="/images/products/01.png" alt="pizza" />
                                                </div>
                                                <div className="product__name">Чизбургер-пицца</div>
                                            </div>
                                            <div className="product__params">
                                                <ul className="product__type">
                                                    <li className="product__type-item">тонкое</li>
                                                    <li className="product__type-item">традиционное</li>
                                                </ul>
                                                <ul className="product__size">
                                                    <li className="product__size-item">26 см.</li>
                                                    <li className="product__type-item">30 см.</li>
                                                    <li className="product__type-item">40 см.</li>
                                                </ul>
                                            </div>
                                            <div className="product__footer">
                                                <div className="product__price">
                                                    от 395 ₽
                                                </div>
                                                <div className="product__buttons">
                                                    <button className='button-product'>
                                                        <div className="button-product__content">
                                                            <div className="button-product__row">
                                                                <div className="button-product__icon">
                                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"/>
                                                                    </svg>
                                                                </div>
                                                                <div className="button-product__text">Добавить</div>
                                                                <div className="button-product__quantity">2</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="product__content">
                                            <div className="product__head">
                                                <div className="product__img">
                                                    <img src="/images/products/01.png" alt="pizza" />
                                                </div>
                                                <div className="product__name">Чизбургер-пицца</div>
                                            </div>
                                            <div className="product__params">
                                                <ul className="product__type">
                                                    <li className="product__type-item">тонкое</li>
                                                    <li className="product__type-item">традиционное</li>
                                                </ul>
                                                <ul className="product__size">
                                                    <li className="product__size-item">26 см.</li>
                                                    <li className="product__type-item">30 см.</li>
                                                    <li className="product__type-item">40 см.</li>
                                                </ul>
                                            </div>
                                            <div className="product__footer">
                                                <div className="product__price">
                                                    от 395 ₽
                                                </div>
                                                <div className="product__buttons">
                                                    <button className='button-product'>
                                                        <div className="button-product__content">
                                                            <div className="button-product__row">
                                                                <div className="button-product__icon">
                                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"/>
                                                                    </svg>
                                                                </div>
                                                                <div className="button-product__text">Добавить</div>
                                                                <div className="button-product__quantity">2</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="product__content">
                                            <div className="product__head">
                                                <div className="product__img">
                                                    <img src="/images/products/01.png" alt="pizza" />
                                                </div>
                                                <div className="product__name">Чизбургер-пицца</div>
                                            </div>
                                            <div className="product__params">
                                                <ul className="product__type">
                                                    <li className="product__type-item">тонкое</li>
                                                    <li className="product__type-item">традиционное</li>
                                                </ul>
                                                <ul className="product__size">
                                                    <li className="product__size-item">26 см.</li>
                                                    <li className="product__type-item">30 см.</li>
                                                    <li className="product__type-item">40 см.</li>
                                                </ul>
                                            </div>
                                            <div className="product__footer">
                                                <div className="product__price">
                                                    от 395 ₽
                                                </div>
                                                <div className="product__buttons">
                                                    <button className='button-product'>
                                                        <div className="button-product__content">
                                                            <div className="button-product__row">
                                                                <div className="button-product__icon">
                                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"/>
                                                                    </svg>
                                                                </div>
                                                                <div className="button-product__text">Добавить</div>
                                                                <div className="button-product__quantity">2</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="product__content">
                                            <div className="product__head">
                                                <div className="product__img">
                                                    <img src="/images/products/01.png" alt="pizza" />
                                                </div>
                                                <div className="product__name">Чизбургер-пицца</div>
                                            </div>
                                            <div className="product__params">
                                                <ul className="product__type">
                                                    <li className="product__type-item">тонкое</li>
                                                    <li className="product__type-item">традиционное</li>
                                                </ul>
                                                <ul className="product__size">
                                                    <li className="product__size-item">26 см.</li>
                                                    <li className="product__type-item">30 см.</li>
                                                    <li className="product__type-item">40 см.</li>
                                                </ul>
                                            </div>
                                            <div className="product__footer">
                                                <div className="product__price">
                                                    от 395 ₽
                                                </div>
                                                <div className="product__buttons">
                                                    <button className='button-product'>
                                                        <div className="button-product__content">
                                                            <div className="button-product__row">
                                                                <div className="button-product__icon">
                                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"/>
                                                                    </svg>
                                                                </div>
                                                                <div className="button-product__text">Добавить</div>
                                                                <div className="button-product__quantity">2</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="product__content">
                                            <div className="product__head">
                                                <div className="product__img">
                                                    <img src="/images/products/01.png" alt="pizza" />
                                                </div>
                                                <div className="product__name">Чизбургер-пицца</div>
                                            </div>
                                            <div className="product__params">
                                                <ul className="product__type">
                                                    <li className="product__type-item">тонкое</li>
                                                    <li className="product__type-item">традиционное</li>
                                                </ul>
                                                <ul className="product__size">
                                                    <li className="product__size-item">26 см.</li>
                                                    <li className="product__type-item">30 см.</li>
                                                    <li className="product__type-item">40 см.</li>
                                                </ul>
                                            </div>
                                            <div className="product__footer">
                                                <div className="product__price">
                                                    от 395 ₽
                                                </div>
                                                <div className="product__buttons">
                                                    <button className='button-product'>
                                                        <div className="button-product__content">
                                                            <div className="button-product__row">
                                                                <div className="button-product__icon">
                                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"/>
                                                                    </svg>
                                                                </div>
                                                                <div className="button-product__text">Добавить</div>
                                                                <div className="button-product__quantity">2</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="product__content">
                                            <div className="product__head">
                                                <div className="product__img">
                                                    <img src="/images/products/01.png" alt="pizza" />
                                                </div>
                                                <div className="product__name">Чизбургер-пицца</div>
                                            </div>
                                            <div className="product__params">
                                                <ul className="product__type">
                                                    <li className="product__type-item">тонкое</li>
                                                    <li className="product__type-item">традиционное</li>
                                                </ul>
                                                <ul className="product__size">
                                                    <li className="product__size-item">26 см.</li>
                                                    <li className="product__type-item">30 см.</li>
                                                    <li className="product__type-item">40 см.</li>
                                                </ul>
                                            </div>
                                            <div className="product__footer">
                                                <div className="product__price">
                                                    от 395 ₽
                                                </div>
                                                <div className="product__buttons">
                                                    <button className='button-product'>
                                                        <div className="button-product__content">
                                                            <div className="button-product__row">
                                                                <div className="button-product__icon">
                                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"/>
                                                                    </svg>
                                                                </div>
                                                                <div className="button-product__text">Добавить</div>
                                                                <div className="button-product__quantity">2</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="product__content">
                                            <div className="product__head">
                                                <div className="product__img">
                                                    <img src="/images/products/01.png" alt="pizza" />
                                                </div>
                                                <div className="product__name">Чизбургер-пицца</div>
                                            </div>
                                            <div className="product__params">
                                                <ul className="product__type">
                                                    <li className="product__type-item">тонкое</li>
                                                    <li className="product__type-item">традиционное</li>
                                                </ul>
                                                <ul className="product__size">
                                                    <li className="product__size-item">26 см.</li>
                                                    <li className="product__type-item">30 см.</li>
                                                    <li className="product__type-item">40 см.</li>
                                                </ul>
                                            </div>
                                            <div className="product__footer">
                                                <div className="product__price">
                                                    от 395 ₽
                                                </div>
                                                <div className="product__buttons">
                                                    <button className='button-product'>
                                                        <div className="button-product__content">
                                                            <div className="button-product__row">
                                                                <div className="button-product__icon">
                                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"/>
                                                                    </svg>
                                                                </div>
                                                                <div className="button-product__text">Добавить</div>
                                                                <div className="button-product__quantity">2</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="product__content">
                                            <div className="product__head">
                                                <div className="product__img">
                                                    <img src="/images/products/01.png" alt="pizza" />
                                                </div>
                                                <div className="product__name">Чизбургер-пицца</div>
                                            </div>
                                            <div className="product__params">
                                                <ul className="product__type">
                                                    <li className="product__type-item">тонкое</li>
                                                    <li className="product__type-item">традиционное</li>
                                                </ul>
                                                <ul className="product__size">
                                                    <li className="product__size-item">26 см.</li>
                                                    <li className="product__type-item">30 см.</li>
                                                    <li className="product__type-item">40 см.</li>
                                                </ul>
                                            </div>
                                            <div className="product__footer">
                                                <div className="product__price">
                                                    от 395 ₽
                                                </div>
                                                <div className="product__buttons">
                                                    <button className='button-product'>
                                                        <div className="button-product__content">
                                                            <div className="button-product__row">
                                                                <div className="button-product__icon">
                                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"/>
                                                                    </svg>
                                                                </div>
                                                                <div className="button-product__text">Добавить</div>
                                                                <div className="button-product__quantity">2</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product">
                                        <div className="product__content">
                                            <div className="product__head">
                                                <div className="product__img">
                                                    <img src="/images/products/01.png" alt="pizza" />
                                                </div>
                                                <div className="product__name">Чизбургер-пицца</div>
                                            </div>
                                            <div className="product__params">
                                                <ul className="product__type">
                                                    <li className="product__type-item">тонкое</li>
                                                    <li className="product__type-item">традиционное</li>
                                                </ul>
                                                <ul className="product__size">
                                                    <li className="product__size-item">26 см.</li>
                                                    <li className="product__type-item">30 см.</li>
                                                    <li className="product__type-item">40 см.</li>
                                                </ul>
                                            </div>
                                            <div className="product__footer">
                                                <div className="product__price">
                                                    от 395 ₽
                                                </div>
                                                <div className="product__buttons">
                                                    <button className='button-product'>
                                                        <div className="button-product__content">
                                                            <div className="button-product__row">
                                                                <div className="button-product__icon">
                                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"/>
                                                                    </svg>
                                                                </div>
                                                                <div className="button-product__text">Добавить</div>
                                                                <div className="button-product__quantity">2</div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
      </div>
    );
  }
  
  export default App;
  