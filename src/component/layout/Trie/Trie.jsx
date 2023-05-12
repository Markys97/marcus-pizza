import './style/trie.css'
import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { changeItemTriActive } from '../../../redux/slices/view';
import { getCurrentActiveItemTri } from './functions';

function Trie() {
    // all component state
    const [isOpenBodyTri, setOpenBodyTri] = useState(false)
    const handlerBodyTri = ()=> setOpenBodyTri(prev=> !prev)
    

    // redux logic
    const dispatch = useDispatch()
    const itemTriList = useSelector(state => state.view.trieList);

    // view logic
    const handlerItemTri = id => {
        dispatch(changeItemTriActive(id))
        handlerBodyTri()
    }
    const activeItemTri = getCurrentActiveItemTri(itemTriList)

    // set bottom position trie body 
    useEffect(()=>{    
        const trieBody = document.querySelector('.trie__body')
        if(trieBody){
            const trieBodyHeight = parseFloat(getComputedStyle(trieBody).height);
            trieBody.style.bottom = `-${trieBodyHeight + 8}px`
        }
        
    })

  return (
    <div className="trie">
        <div className="trie__content">
            <div onClick={()=>  handlerBodyTri()} className="trie__head">
                <div className="trie__row">
                    <div className="trie__title">
                        <div className="trie__title-icon">
                            <img src="/images/utils/icon-fleche.png" alt="icon" />
                        </div>
                        <div className="trie__title-text">
                            Сортировка по:
                        </div>
                    </div>
                    <div className="trie__result">
                        {activeItemTri.text}
                    </div>
                </div>
            </div>
           
            {
                isOpenBodyTri && (
                    <ul className="trie__body">
                        {
                            itemTriList.map((itemTri,index)=>(
                                <li onClick={()=> handlerItemTri(itemTri.id)} key={index} className={`trie__body-item ${itemTri.isActive?' active':''}`}>{itemTri.text}</li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    </div>
  )
}

export default Trie