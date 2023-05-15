import'./style/product.css'

function Product({itemProduct}) {

    const {img,name,type,size,price} = itemProduct
    // console.log(itemProduct,' mama')
  return (
    <div className="product">
        <div className="product__content">
            <div className="product__head">
                <div className="product__img">
                    <img src={`/images/products/${img}`} alt={name} />
                </div>
                <div className="product__name">{name}</div>
            </div>
            <div className="product__params">
                {
                    type && (
                    <ul className="product__type">
                       {
                        type.map( itemType => (
                            <li className={`product__type-item ${itemType.isActive?'active':''}`}>{itemType.value}</li>
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
                            <li className={`product__size-item ${itemSize.isActive?'active':''}`}>{itemSize.value}</li>
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
                    <button className='button-product '>
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
  )
}

export default Product