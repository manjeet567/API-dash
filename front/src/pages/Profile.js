import { useEffect, useState,useContext } from "react";
import {Link} from 'react-router-dom'
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Contextapi } from "../Contextapi";

function Profile() {
    const{user}=useContext(Contextapi)
    const [data, setData] = useState({})
    const [message, setMessage] = useState('')
    const [loadingData, setLoadingData] = useState(true)
    useEffect(()=>{
        fetch(`/profile?id=${user[0].empID}`).then(res=>res.json()).then((data)=>{
            //console.log(data)
            if(data.status===200){
                setData(data.apiData)
                setLoadingData(false)
            }else{
                setMessage(data.message)
            }
        })
    },[])
    return (
        <>
        <Header/>
        <Sidebar/>
            <section className="home-section">
                <section id="profile">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8"><h4>My Profile</h4></div>
                            <div className="col-md-4"><Link to={`/profileupdate/${data.empID}`}><button className="btn">Edit <i className="bi bi-pencil"></i></button></Link></div>
                        </div>
                        <div className="row mt-5 profilerow">
                            <div className="col-md-2">
                                <img src={`http://localhost:5001/public/upload/${data.img}`} alt="" className="img-fluid" />

                            </div>
                            <div className="col-md-5">
                                <h6 className="align-middle mt-4">{data.empname}</h6>
                                <span>{data.designation}</span>
                            </div>

                        </div>
                        <div className="row mt-5 profilerow">
                            <div className="col-md-12">
                                <h5>Mobile Number:  <span>{data.mobile}</span></h5>
                                <hr />
                                <h5>Email:  <span>{data.email}</span></h5>
                                <hr />
                                <h5>Designation:  <span>{data.designation}</span></h5>
                                <hr />
                                <h5>Deprtment:  <span>{data.dept}</span></h5>
                            </div>

                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Profile;