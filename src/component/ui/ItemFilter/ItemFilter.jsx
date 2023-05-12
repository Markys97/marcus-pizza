import './style/itemFilter.css'
import { useDispatch } from 'react-redux';
import { setToggleActiveItemFilter } from '../../../redux/slices/view';

function ItemFilter({dataItem,}) {
  const dispatch = useDispatch()
  const {id,text,isActive}=dataItem

  const handlerItemFiltter = ()=>{
   dispatch(setToggleActiveItemFilter(id))
  }

  return (
    <div onClick={()=> handlerItemFiltter(id)} className= {`item-filter ${isActive === true ?'active':''}`}>
        {text}
    </div>
  )
}

export default ItemFilter