import React ,{useState} from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';
import Loader from "../components/Loader";

function LoginPage() {
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [loading,setLoading] = useState(false);
const auth = getAuth();

const login = async()=>{
  try{
    setLoading(true);
const result= await signInWithEmailAndPassword(auth,email, password)
localStorage.setItem('currentUser',JSON.stringify(result));
toast.success('login Successful')
window.location.href='/';
    setLoading(false);

  }catch(error){
console.log(error)
toast.error('login failed')

setLoading(false);

  }
}


  return (
    <div className='login-parent'>
            {loading && (<Loader/>)}

      <div className="row justify-content-centre">

      <div className="col-md-4 z1">
<div className="login-form">
  <h2>Login</h2>
  <hr/>
  <input type= "text" className="form-control" placeholder="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
  <input type= "text" className="form-control" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
<button className='my-4' onClick={login}>LOGIN</button>
<hr/>
<Link to='/register'>click here to register</Link>

</div>
        </div>

        <div className="col-md-5 z1">
          <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_6wutsrox.json" background="transparent" speed="1"  loop  autoplay></lottie-player>

        </div>
        
      </div>
      <div className="login-bottom"></div>

    </div>
  );
}

export default LoginPage;
