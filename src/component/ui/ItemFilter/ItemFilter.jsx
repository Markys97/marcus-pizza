import './style/itemFilter.css'

function ItemFilter({textButton,isActive}) {
  return (
    <div className= {`item-filter ${isActive === true ?'active':''}`}>
        {textButton}
    </div>
  )
}

export default ItemFilter