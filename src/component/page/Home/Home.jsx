import './style/home.css'
import Trie from '../../layout/Trie/Trie';
import Filter from '../../layout/Filter/Filter';
import ListProduct from '../../layout/ListProduct/ListProduct';
import { useSelector } from 'react-redux';

function Home() {
    const listFilter = useSelector(state => state.view.filterList)
   const activeItemFilter = listFilter.find(item => item.isActive)
   console.log(activeItemFilter)

  return (
    <main className='home'>
        <div className="home__container wrapper">
            <div className="home__content">
                <div className="home__setting">
                    <Filter/>
                    <Trie/>
                </div>

                <section className="home-main">
                    <div className="home-main__content">
                        <h2 className="home-main__title">{activeItemFilter.text} пиццы</h2>
                        <ListProduct/>
                    </div>
                </section>
            </div>
        </div>
       
    </main>
  )
}

export default Home