import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useParams } from "react-router-dom";

function Profileupdate() {
  const {id}=useParams()
  const[name,setName]=useState('')
  const[mobile,setMobile]=useState('')
  const[email,setemail]=useState('')
  const[dept,setDept]=useState('')
  const[designation,setDesignation]=useState("")
  const[file,setfile]=useState(null)
  const [data, setData] = useState('')
  const [message, setMessage] = useState('')
  const [loadingData, setLoadingData] = useState(true)
  useEffect(()=>{
    fetch(`/profile?id=${id}`).then(res=>res.json()).then((data)=>{
      console.log(data)
      if(data.status===200){
          setData(data.apiData.img)
          setName(data.apiData.empname)
          setMobile(data.apiData.mobile)
          setemail(data.apiData.email)
          setDesignation(data.apiData.designation)
          setDept(data.apiData.dept)
      }else{
          setMessage(data.message)
      }
  })
  },[id])
  function handleform(e){
    e.preventDefault()
    const formdata=new FormData()
        formdata.append('empname',name)
        formdata.append('email',email)
        formdata.append('mobile',mobile)
        formdata.append('dept',dept)
        formdata.append('designation',designation)
        formdata.append('file',file)
    fetch(`/profile_update?id=${id}`,{
      method:"POST",
      body:formdata
    }).then(res=>res.json()).then((data)=>{
      console.log(data)
      setMessage(data.message)
      setTimeout(()=>{
        setMessage('')
      },1500)
    })
  }
  return (
    <>
    <Header/>
    <Sidebar/>
      <section className="home-section">
        <section id="emp">
          <form onSubmit={(e)=>{handleform(e)}}>
            <div className="container">
              <div className="row">
               
                <h2>Profile Update</h2>
                <br />
                
                <div className="col-md-3"></div>
                <div className="col-md-3">
                  <label for="">Employee Name</label>
                  <input type="text" name="empname" id="" className="form-control" required title="Please enter valid name"
                   value={name} 
                   onChange={(e)=>{setName(e.currentTarget.value)}}
                   />
                  <br />
                  <label for="">Email</label>
                  <input type="email" name="email" id="" className="form-control" required title="Please enter valid email" pattern="[a-zA-Z0-9]*[@]{1}[a-zA-Z0-9]*[.]{1}[a-zA-Z0-9]*" 
                   value={email} 
                   onChange={(e)=>{setemail(e.currentTarget.value)}}
                  />
                  <br />
                  <label for="">Department</label>
                  <input type="text" name="dept" id="" className="form-control" required title="Please enter value"
                   value={dept} 
                   onChange={(e)=>{setDept(e.currentTarget.value)}}
                  />
                </div>
                <div className="col-md-3">
                  <label for="">Mobile Number</label>
                  <input type="tel" name="mobile" id="" className="form-control" required pattern="[0-9]{10}" title="Please enter valid mobile number" 
                   value={mobile} 
                   onChange={(e)=>{setMobile(e.currentTarget.value)}}
                  />
                  <br />
                  <label for="">Designation</label>
                  <input type="text" name="designation" id="" className="form-control" required title="Please enter value" 
                   value={designation} 
                   onChange={(e)=>{setDesignation(e.currentTarget.value)}}
                  />
                  <br />
                  <label for="">Employee Image</label>
                  <input type="file" name="img" id="" className="form-control" 
                  onChange={(e)=>{setfile(e.target.files[0])}}
                  />
                  <p className="form-text"> {data}</p>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
            <p style={{ color: "red", textAlign: "center" ,textAlign:"center"}}>{message}</p>
            <h2><button type="submit" className="btn btn-success mt-4">Update</button></h2>
          </form>

        </section>
      </section>
    </>
  );
}

export default Profileupdate;