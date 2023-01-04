import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {LoginUser,reset} from "../features/AuthSlices"


function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user,isError,isLoading,isSuccess,message} = useSelector(
        (state)=> state.auth
    );

    useEffect(()=>{
        if(user && user.role === "admin"){
            navigate("/dashboard")
        }
        else if (user && user.role === "user"){
            navigate(`/dashboard/${user.uuid}`)
        }
        dispatch(reset())
    },[user,isSuccess,dispatch,navigate])

    const Auth = (e)=>{
        e.preventDefault();
        dispatch(LoginUser({email,password}));
    }

    
  return (
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={Auth}>
    <p className="has-text-centered"></p>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
           
           
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            
            
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            {isLoading ? "Loading" : "Masuk"}
          </button>
          {isError && <p>{message}</p>}
        </div>
      </div>
    </form>
  </div>
  )
}

export default Login
