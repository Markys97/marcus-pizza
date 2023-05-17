import './style/header.css'
import { Link,useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
    const cart = useSelector(state => state.product.cart)
    // hide buttn cart in header on cart page
    const location = useLocation()
    let {pathname} = location
    pathname=pathname.replace('/','').toLocaleLowerCase()
    const getTotalProductInCart = cart => cart.length
    const totalProductInCart = getTotalProductInCart(cart)
    const getTotalPrice = cart =>{
        if(cart.length === 0) return 0
        let total = cart.reduce((acc,currentProduct)=> {
            acc += currentProduct.price*currentProduct.qt
            return acc
        },0)

        return total
    }

    const totalPrice = getTotalPrice(cart)

  return (
    <header className="header">
        <div className="header__container wrapper">
            <div className="header__content">
                <div className="header__row">
                    <div className="header__left">
                        <Link to="/">
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
                        </Link>
                        
                    </div>
                    {
                        pathname!== 'cart' && (
                            <div className="header__right">
                                <Link to="./cart">
                                    <button className="button-cart">
                                        <div className="button-cart__row">
                                            <div className="button-cart__price">{totalPrice} ₽</div>
                                            <div className="button-cart__info">
                                                <div className="button-cart__icon">
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </div>
                                                <div className="button-cart__quantity">{totalProductInCart}</div>
                                            </div>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        )
                    }
                   
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header