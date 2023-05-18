import './style/listProductInCart.css'
import ProductInCart from '../ProductInCart/ProductInCart'

function ListProductInCart({listProduct}) {
  return (
    <div className=" list-product-in-cart">
       
        {
          listProduct.map((productItem, index) =>  <ProductInCart key={index} productData ={productItem}/>)
        }
    </div>
  )
}

export default ListProductInCart