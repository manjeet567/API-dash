import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Empreg() {
    const[name,setName]=useState('')
    const[mobile,setMobile]=useState('')
    const[email,setemail]=useState('')
    const[dept,setDept]=useState('')
    const[designation,setDesignation]=useState("")
    const[file,setfile]=useState(null)
    const[message,setMessage]=useState('')

    const handlevalue=(e,func)=>{
        func(e.target.value)
    }
    
    const handlefiles=(e,func)=>{
        console.log(e.target.files)
        func(e.target.files[0])
      }
    const handleform=async(e)=>{
        e.preventDefault()
        const formdata=new FormData()
        formdata.append('empname',name)
        formdata.append('email',email)
        formdata.append('mobile',mobile)
        formdata.append('dept',dept)
        formdata.append('designation',designation)
        formdata.append('file',file)
        console.log(formdata,name,email,mobile,designation,file)
       await fetch('/empreg',{
            method:"POST",
            body:formdata
        }).then(result=>result.json()).then((data)=>{
            //console.log(data)
            if(data.status===201){
                setMessage(data.message)
                setTimeout(()=>{
                    setMessage('')
                },2000)
                setName('')
                setemail('')
                setDept('')
                setMobile('')
                setDesignation("")
                setfile(null)
            }else{
                setMessage(data.message)
                setTimeout(()=>{
                    setMessage('')
                },2000)
            }
        })
    }
    return (
        <>
            <Header />
            <Sidebar />
            <section className="home-section">
                <section id="emp">
                    <form onSubmit={(e)=>{handleform(e)}}>
                        <div className="container">
                            <div className="row">
                                <h2>Employee Registration</h2>
                                <span style={{ color: "red", textAlign: "center",fontSize:"12px" }}>{message}</span>
                                <br />
                                <div className="col-md-3"></div>
                                <div className="col-md-3">
                                    <br />
                                    <label for="">Employee Name</label>
                                    <input type="text" name="empname" id="" className="form-control" required title="Please enter valid name" 
                                    value={name}
                                    onChange={(e)=>{handlevalue(e,setName)}}
                                    />
                                    <br />
                                    <label for="">Email</label>
                                    <input type="email" name="email" id="" className="form-control" required title="Please enter valid email" pattern="[a-zA-Z0-9]*[@]{1}[a-zA-Z0-9]*[.]{1}[a-zA-Z0-9]*" 
                                     value={email}
                                     onChange={(e)=>{handlevalue(e,setemail)}}
                                    />
                                    <br />
                                    <label for="">Department</label>
                                    <input type="text" name="dept" id="" className="form-control" required title="Please enter value" 
                                     value={dept}
                                     onChange={(e)=>{handlevalue(e,setDept)}}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <br />
                                    <label for="">Mobile Number</label>
                                    <input type="tel" id="" className="form-control" required pattern="[0-9]{10}" title="Please enter valid mobile number" 
                                     value={mobile}
                                     onChange={(e)=>{handlevalue(e,setMobile)}}
                                    />
                                    <br />
                                    <label for="">Designation</label>
                                    <input type="text"  id="" className="form-control" required title="Please enter value" 
                                     value={designation}
                                     onChange={(e)=>{handlevalue(e,setDesignation)}}
                                    />
                                    <br />
                                    <label for="">Employee Image</label>
                                    <input type="file" className="form-control" required
                                     onChange={(e)=>{setfile(e.target.files[0])}}
                                    />
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                        <h2><button type="submit" className="btn btn-success mt-4">Register</button></h2>
                    </form>


                </section>
            </section>
        </>
    );
}

export default Empreg;