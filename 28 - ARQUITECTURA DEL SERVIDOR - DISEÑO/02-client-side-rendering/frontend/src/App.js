import logo from './logo.svg';
import './App.css';
import CompShowBlogs from './components/ShowBlogs.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CompCreateBlog from './components/CreateBlog';
import CompEditBlog from './components/EditBlog';
import CompCreateUser from './components/CreateUser'
import CompLoginUser from './components/LoginUser';
import CompHome from './components/Home';
import Navbar1 from './components/NavBar'

function App() {
  return (
    <div className="App">
    
      {/* <Navbar1></Navbar1> */}

        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={< CompLoginUser />}  />
                <Route path='/signup' element={< CompCreateUser/>} />
                <Route path='/blogs' element={<CompShowBlogs />} />
                <Route path='/create/:id' element={<CompCreateBlog />} />
                <Route path='/edit/:id' element={<CompEditBlog />} />
                <Route path='/home/:id' element={< CompHome/>} />
                {/* <Route path='/home' element={< Navbar1 />}  /> */}
            </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
