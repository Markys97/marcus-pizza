import './style/filter.css'
import ItemFilter from '../../ui/ItemFilter/ItemFilter'
import { useSelector,useDispatch } from 'react-redux';


function Filter() {
  const listFilter = useSelector(state => state.view.filterList);
  return (
    <div className="filter">
        <div className="filter__content">
            <div className="filter__scroll">
                <div className="filter__row">

                    {listFilter.map((itemFilter,index)=>   <ItemFilter key={index} dataItem ={itemFilter}/>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter