import'./style/listProduct.css'
import Product from '../Product/Product'
import { useSelector } from 'react-redux'
import { getCurrentFiltreActive } from '../Filter/function'
import { getCurrentActiveItemTri } from '../Trie/functions'



function ListProduct() {
  const listFilter = useSelector(state=> state.view.filterList);
  const listProduct = useSelector(state => state.product.listProduct);
  const listTri = useSelector(state=> state.view.trieList)
  const activeItemFilter = getCurrentFiltreActive(listFilter);
  const activeTriItem = getCurrentActiveItemTri(listTri);

  const getFinalListProduct = (activeItemFilter,activeTriItem,listProduct) =>{
    
    let listProductByFilter;
    let activeTriItemText = activeTriItem.text.toLowerCase()

    if(activeItemFilter.id === 0){
      listProductByFilter = listProduct
    }else{
      listProductByFilter = listProduct.filter(product => product.categori.toLowerCase()=== activeItemFilter.text.toLowerCase())
    }

    switch(activeTriItemText){
      case 'популярности' :
        return listProductByFilter
        break
      case 'по цене':
        return listProductByFilter.slice().sort((a,b)=> a.price - b.price)
        break
      case 'по алфавиту':
        return listProductByFilter.slice().sort((a,b)=> a.name - b.name)
        break
        default:
          return listProductByFilter
           break
    }


  }
  const  finalListProduct = getFinalListProduct(activeItemFilter,activeTriItem,listProduct)

  return (
    <div className="list-product">
        <div className="list-product__row">
         
            {
              finalListProduct.map((product,index)=>  <Product key={index}  itemProduct={product}/>)
            }
        </div>
    </div>
  )
}

export default ListProduct