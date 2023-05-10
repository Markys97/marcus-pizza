import './style/trie.css'
import { useEffect } from 'react';

function Trie() {

    // set bottom position trie body
    useEffect(()=>{
        const trieBody = document.querySelector('.trie__body')
        const trieBodyHeight = parseFloat(getComputedStyle(trieBody).height);
    
        if(trieBody !== undefined){
            trieBody.style.bottom = `-${trieBodyHeight + 8}px`
        }
        
    })

  return (
    <div className="trie">
        <div className="trie__content">
            <div className="trie__head">
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
                        популярности
                    </div>
                </div>
            </div>
            <ul className="trie__body">
                <li className="trie__body-item active">популярности</li>
                <li className="trie__body-item">по цене</li>
                <li className="trie__body-item">по алфавиту</li>
            </ul>
        </div>
    </div>
  )
}

export default Trie