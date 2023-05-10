import './style/filter.css'
import ItemFilter from '../../ui/ItemFilter/ItemFilter'

function Filter() {
  return (
    <div className="filter">
        <div className="filter__content">
            <div className="filter__scroll">
                <div className="filter__row">
                    <ItemFilter textButton="Все" isActive={true}/>
                    <ItemFilter textButton="Мясные" isActive={false}/>
                    <ItemFilter textButton="Мясные" isActive={false}/>
                    <ItemFilter textButton="Мясные" isActive={false}/>
                    <ItemFilter textButton="Мясные" isActive={false}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter