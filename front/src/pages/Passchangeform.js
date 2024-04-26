import { useContext, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Contextapi } from "../Contextapi";

function Passchangeform() {
    const{user}=useContext(Contextapi)
    const [cpass, setcpass] = useState('')
    const[npass,setnpass]=useState('')
    const[cnpass,setcnpass]=useState('')
    const[message,setmessage]=useState('')
    
    const handleform=(e)=>{
        e.preventDefault()
       if(npass!==cnpass){
        return setmessage('Confirm password should be same to new password')
       }
       if(cpass && npass && cnpass){
        const formdata={cnpass,cpass,npass}
        fetch(`/changepass/?id=${user[0].empID}`,{
            method:"POST",
            headers:{'Content-Type':"application/json"},
            body:JSON.stringify(formdata)
        }).then(res=>res.json()).then((data)=>{
            console.log(data)
            if(data.status===201){
                setmessage(data.message)
            }else{
                setmessage(data.message)
            }
        })
       }
    }
    return (
        <>
        <Header/>
        <Sidebar/>
            <section className="home-section">
                <div className="mainDiv">
                    <div className="cardStyle">
                        <form onSubmit={(e)=>{handleform(e)}}>
                            <h2 className="formTitle">
                                Change Your Password
                            </h2>
                            <span style={{color:"red",fontSize:"12px",marginLeft:"80px"}}>{message}</span>
                            <div className="inputDiv">
                                <label className="inputLabel" for="password">Current Password</label>
                                <input type="password" id="" name="cpassword" required
                                value={cpass}
                                onChange={(e)=>{setcpass(e.target.value)}}
                                />
                                    <small style={{color: "red"}} className="inputLabel"></small>
                            </div>

                            <div className="inputDiv">
                                <label className="inputLabel" for="password">New Password</label>
                                <input type="password" id="password" name="password" required
                                 value={npass}
                                 onChange={(e)=>{setnpass(e.target.value)}}
                                />
                            </div>

                            <div className="inputDiv">
                                <label className="inputLabel" for="confirmPassword">Confirm Password</label>
                                <input type="password" id="confirmPassword" name="confirmPassword"
                                 value={cnpass}
                                 onChange={(e)=>{setcnpass(e.target.value)}}
                                />
                            </div>

                            <div className="buttonWrapper">
                                <button type="submit" id="submitButton" onclick="validateSignupForm()" className="submitButton pure-button pure-button-primary">
                                    <span>Continue</span>

                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Passchangeform;