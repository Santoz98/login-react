import React,{useState} from 'react'
import checkInput from './logic'

const App = () => {

    const [username,setUsername] = useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword] =useState('')
    const [password2,setPassword2]= useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        checkInput(username,email,password,password2)
        console.log(username)
    }

    
    return (
            <div className="container">
      <div className="header">
        <h2>Create Account</h2>
      </div>
      <form className="form" id ="form">
      <div className="form-control">
        <label htmlFor="">Username</label>
        <input type="text" placeholder="santy" id="username"
        value={username} onChange={(e)=>{setUsername(e.target.value)}}
        >

        </input>
        <i className="fas fa-check-circle"></i>
        <i className="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <div className="form-control ">
        <label htmlFor="">Email</label>
        <input type="email" placeholder="santy@gmail.com" id="email"
        value={email} onChange={(e)=>{setEmail(e.target.value)}}>

        </input>
        <i className="fas fa-check-circle"></i>
        <i className="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <div className="form-control">
        <label htmlFor="">Password</label>
        <input type="password" placeholder="password" id="password"
        value={password} onChange={(e)=>{setPassword(e.target.value)}}>

        </input>
        <i className="fas fa-check-circle"></i>
        <i className="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <div className="form-control">
        <label htmlFor="">Re password</label>
        <input type="password" placeholder="re password" id="password2"
        value={password2} onChange={(e)=>{setPassword2(e.target.value)}}>

        </input>
        <i className="fas fa-check-circle"></i>
        <i className="fas fa-exclamation-circle"></i>
        <small>Error message</small>
      </div>
      <button type="submit" onClick={handleSubmit}>Submit </button>
    </form>
    
    </div>
        )
}

export default App
