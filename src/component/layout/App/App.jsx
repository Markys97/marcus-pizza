import './style/app.css'
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function App() {

    return (
      <div className="App">
       <Header/>
       <Outlet/>
      </div>
    );
  }
  
  export default App;
  