import'./style/listProduct.css'
import Product from '../App/Product/Product'

function ListProduct() {
  return (
    <div className="list-product">
        <div className="list-product__row">
            <Product/>
        </div>
    </div>
  )
}

export default ListProduct