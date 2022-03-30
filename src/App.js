import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import {Route,BrowserRouter,Routes ,Navigate} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Productinfo from './pages/Productinfo';
import CartPage from './pages/CartPage';
import './stylesheets/layout.css'
import bootstrap from 'bootstrap';
import './stylesheets/products.css'
import './stylesheets/authentication.css'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
     <ToastContainer/>
      <BrowserRouter>
      <Routes>
     
      <Route path="/" exact element={<ProtectedROutes><HomePage /></ProtectedROutes>} />
      <Route path="/productinfo/:productid" exact element={<ProtectedROutes><Productinfo /></ProtectedROutes>} />
      <Route path="/cart" exact element={<ProtectedROutes><CartPage /></ProtectedROutes>} />
      <Route path="/login" exact element={<LoginPage/>} />
      <Route path="/register" exact element={<RegisterPage/>} />

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

export const ProtectedROutes=({children})=>{
  if(localStorage.getItem('currentUser')){
    return children;
  }
  else{
    return <Navigate to = "/login"/>
  }
}
