import'./style/listProduct.css'
import Product from '../Product/Product'
import { useSelector,useDispatch } from 'react-redux'
import { getCurrentFiltreActive } from '../Filter/function'
import { getCurrentActiveItemTri } from '../Trie/functions'
import {setCartNotifOpen}  from '../../../redux/slices/product';
import {useState,useEffect} from 'react'


function ListProduct() {
  const dispatch = useDispatch()
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

  const cart = useSelector(state=> state.product.cart)
  const isCartNotifOpen = useSelector(state => state.product.isCartNotifOpen)
  

  useEffect(()=>{
    setTimeout(() => {
      // setCartNotifOpen(false)
      dispatch(setCartNotifOpen(false))
    }, 1000);
  },[cart.length])

  return (
    <div className="list-product">
      {
        finalListProduct.length!==0? (
          <div className="list-product__row">
            {
              finalListProduct.map((product,index)=>  <Product key={index}  itemProduct={product}/>)
            }
        </div>
        ):(
          <div className="list-product__empty">
             пока нет пиццы
          </div>
        )
      }

        <div className= {`notification ${isCartNotifOpen?'active':''}`}>пицца успешно добавлена</div>
    </div>
  )
}

export default ListProduct