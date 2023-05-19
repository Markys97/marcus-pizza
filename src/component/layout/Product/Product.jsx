import'./style/product.css'
import { useDispatch,useSelector} from 'react-redux';
import {
     setTypeProductActive,
     setSizeProductActive,
     addProductInCart,
     setCartNotifOpen
} from '../../../redux/slices/product';
import { useEffect, useRef, useState } from 'react';

function Product({itemProduct}) {
    const cart = useSelector(state => state.product.cart)
    const dispatch = useDispatch()
    const {id,img,name,type,size,price} = itemProduct


    const setActiveType = (e,id) => {
      let textClickedItem = e.target.textContent.toLowerCase();
      let itemClicked = type.find(item=> item.value.toLowerCase() === textClickedItem)
      dispatch(setTypeProductActive({id,text:textClickedItem}))
    }
    const setActiveSize = (e,id) => {
      let textClickedItem = e.target.textContent.toLowerCase();
      let itemClicked = type.find(item=> item.value.toLowerCase() === textClickedItem)
      dispatch(setSizeProductActive({id,text:textClickedItem}))
    }
 
    const getActiveSize = size => size.find(item => item.isActive)
    const getActiveType = type => type.find(item => item.isActive) 
    const activeSizeValue = getActiveSize(size).value.toLowerCase().replace('.','')
    const activeTypeValue =  getActiveSize(type).value.toLowerCase()

    const handlerWidthProduct =size=>{
        switch(size){
            case '26 см':
                return 'small'
                break
            case '30 см':
                return 'normal'
                break
            case '40 см':
                return 'big'
                break
            default:
                return ''
        }
    }

    const addNewProductInCart = (id,type,size)=>{

        let productInCart = {id,typeProduct:activeTypeValue,sizeProduct:activeSizeValue,price}
        
        dispatch(addProductInCart(productInCart))
        if(cart.findIndex(item=> item.id ===id) ===-1){
            dispatch(setCartNotifOpen(true))
        }
    }

    const getPerTotalProduct = (cart,id)=>{
        let listPerProduct = cart.filter(item => item.id === id)

        return listPerProduct.length
    }

   const perTotalProduct= getPerTotalProduct(cart,id)




  return (
    <div className="product active">
        <div className="product__content">
            <div className="product__head">
                <div className="product__img">
                    <img className={handlerWidthProduct(activeSizeValue)} src={`/images/products/${img}`} alt={name} />
                </div>
                <div className="product__name">{name}</div>
            </div>
            <div className="product__params">
                {
                    type && (
                    <ul className="product__type">
                       {
                        type.map( itemType => (
                            <li onClick={(e)=>(setActiveType(e,id))} className={`product__type-item ${itemType.isActive?'active':''}`}>{itemType.value}</li>
                        ))
                       }
                        
                    </ul>
                    )
                }
                {
                    type && (
                    <ul className="product__size">
                       {
                        size.map( itemSize => (
                            <li  onClick={(e)=>(setActiveSize(e,id))} className={`product__size-item ${itemSize.isActive?'active':''}`}>{itemSize.value}</li>
                        ))
                       }
                        
                    </ul>
                    )
                }
               
               
            </div>
            <div className="product__footer">
                <div className="product__price">
                    от {price} &#x20BD;
                </div>
                <div className="product__buttons ">
                    <button onClick={()=> addNewProductInCart(id,type,size)} className={`button-product ${perTotalProduct!==0? ' active':''} `} >
                        <div className="button-product__content">
                            <div className="button-product__row">
                                <div className="button-product__icon">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white"/>
                                    </svg>
                                </div>
                                <div className="button-product__text">Добавить</div>
                                <div className="button-product__quantity">{perTotalProduct}</div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product