import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const[userName,setUserName]=useState('')
    const[passowrd,setPassword]=useState('')
    const[message,setMessage]=useState('')
    const navigate=useNavigate()
    const handlefomr=(e)=>{
        e.preventDefault()
        const formdata={userName,passowrd}
        if(userName && passowrd){
            fetch(`/emplogin`,{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(formdata)
            }).then(res=>res.json()).then((data)=>{
                //console.log(data)
                if(data.status===200){
                    window.localStorage.setItem('user',JSON.stringify(data.apiData))
                    navigate('/dashboard')
                }else{
                    setMessage('Wrong Credential')
                }
            })
        }
    }
    return ( 
        <>
            <section id="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <img src="/img/3.jpg" alt=""/>
                                <h3>Login</h3>
                               
                                <br/><br/>
                                <span style={{color:"red",fontSize:"12px"}}>{message}</span>
                                    <form onSubmit={(e)=>{handlefomr(e)}}>
                                        <label for="">Username</label>
                                        <input type="text" name="user" id="" className="form-control"
                                        value={userName}
                                        onChange={(e)=>{setUserName(e.target.value)}}
                                        />
                                            <label for="">Password</label>
                                            <input type="password" name="password" id="" className="form-control"
                                            value={passowrd}
                                            onChange={(e)=>{setPassword(e.target.value)}}
                                            />
                                                <small style={{color: "red"}}></small>
                                                <button type="submit" className="form-control btn btn-success mt-2 mb-2" >Login</button>
                                            </form>
                                            <p> <Link to="/forgotpass">Forgot password</Link></p>
                                        </div>
                                        <div className="col-md-4"></div>
                                    </div>
                                </div>
                                </section>
                            </>
                            );
}

                            export default Login;