import './assets/login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const navigate= useNavigate();
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value); 
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value); 
    };

    const handlelogin=(event)=>{
      event.preventDefault();
        if(username==="admin"&&password==="123"){
            navigate("/Teams");
        }else{
            alert("INCORRECT PASSORD OR USERNAME")
        }
    }
  return (
    <div>
        <div className="login-wrapper">
      <div class="wrapper">
        <form action="">
          <h1>login</h1>
          <div class="input-box">
            <input type="text" value={username} onChange={handleUsernameChange}placeholder="username" required />
            <i class="bx bx-user"></i>
          </div>
          <div class="input-box">
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="password" required />
            <i class="bx bx-lock-alt"></i>
          </div>
          <div class="remember-forget">
            <label>
              <input type="checkbox" />
              remember
            </label>
            <a href="#">Forget</a>
          </div>
          <button type="submit"onClick={handlelogin} class="btn">
            login
          </button>
          <div class="register-link">
            <p>
              Don't have account<a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
export default Login
