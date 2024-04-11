
import './App.css';
import Login from './Component/Login.js';
import Profile from './Component/Profile.js';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"  
import DataContext from './Data/DataContext.js';

function App() {
  const Userdata = [
    {
        username: 'admin1',
        password: '123456789'
    },
    {
        username: 'admin2',
        password: '012345678'
    }
  ]
  return (
    <DataContext.Provider value={
        {
          username: 'admin1',
          password: '123456789',
          email: 'redo@gmail.com'
        }
    }>
    <div className="App">
      <div className='container'>
      <article>
        <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route path='/insert' element={<Profile/>}/>
          </Routes>
        </div>
        </Router>
      </article>
      </div>
    </div>
    </DataContext.Provider>
  );
}

export default App;
