import React from 'react'
import {useState,useContext} from 'react'
import Usercontext from '../context/Usercontext'
function Login() {
    const[username,setusername] = useState('');
    const[password,setpassword] = useState('');
    const {setuser}  = useContext(Usercontext)//accessing setuser from usercontext by useContext hook
    const handlesubmit = (e) =>{
       e.preventDefault()//value should not go through post method//
       setuser({username,password});
    }
return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} placeholder='username' onChange={(e)=>setusername(e.target.value)}/>
        <input type = "text" value={password} placeholder = 'password' onChange = {(e)=>setpassword(e.target.value)}/>
        <button onClick={handlesubmit}>Submit</button>
    </div>
)
}
export default Login