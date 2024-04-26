import { useParams } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";

function Memberregupdate() {
    const { id } = useParams()
    const[data,setData]=useState({})
    const [ctype, setctype] = useState('')
    const [companyname, setcompanyname] = useState('')
    const [owneraadharn, setowneraadharn] = useState('')
    const [ownerpann, setownerpann] = useState('')
    const [cinnumber, setcinnumber] = useState('')
    const [ownername, setownername] = useState('')
    const [gstn, setgstn] = useState('')
    const [email, setemail] = useState('')
    const [cpann, setcpann] = useState('')
    const [acnumber, setacnumber] = useState('')
    const [owneradd, setowneradd] = useState('')
    const [companyadd, setcompanyadd] = useState('')
    const [ifsccode, setifsccode] = useState('')
    const [bankname, setbankname] = useState('')
    const [accountholdername, setaccountholdername] = useState('')
    const [domain, setdomain] = useState('')
    const [actype, setactype] = useState('')
    const [service, setservice] = useState('')
    const [ip, setip] = useState('')
    const [mobile, setmobile] = useState('')
    const [message, setMessage] = useState('')

    const handlevalue=(e,func)=>{
        func(e.target.value)
    }
    useEffect(()=>{
        fetch(`/memberdetails?id=${id}`).then(res=>res.json()).then((data)=>{
            console.log(data.apiData)
            if(data.status===200){
                setData(data.apiData)
                setctype(data.apiData.companyType)
                setcompanyname(data.apiData.companyName)
                setowneraadharn(data.apiData.ownerAadharNumber)
                setownerpann(data.apiData.ownerPanNumber)
                setcinnumber(data.apiData.CinNumber)
                setownername(data.apiData.ownerName)
                setgstn(data.apiData.gstNumber)
                setemail(data.apiData.email)
                setcpann(data.apiData.companyPanNumber)
                setacnumber(data.apiData.bankAcNumber)
                setowneradd(data.apiData.owneradd)
                setcompanyadd(data.apiData.companyadd)
                setifsccode(data.apiData.ifscCode)
                setbankname(data.apiData.bankName)
                setaccountholdername(data.apiData.accountHolderName)
                setdomain(data.apiData.domain)
                setip(data.apiData.ip)
                setmobile(data.apiData.mobile)
                setactype(data.apiData.acType)
                setservice(data.apiData.service_data)
            }else{
                setMessage(data.message)
            }
        })
    },[id])
     
    const handleupdate=(e)=>{
        e.preventDefault(e)
        const fromdata={ctype,companyname,owneraadharn,cinnumber,ownername,gstn,email,acnumber,owneradd,ownerpann,cpann,companyadd,ifsccode,bankname,accountholdername,domain,service,ip,mobile,actype}
        fetch(`/member_update?id=${id}`,{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(fromdata)
        }).then(res=>res.json()).then((data)=>{
            console.log(data)
            if(data.status===201){
                setData(data.apiData)
                setMessage(data.message)
                setTimeout(()=>{
                    setMessage('')
                },[2500])
            }else{
                setMessage(data.message)
                setTimeout(()=>{
                    setMessage('')
                },[2500])
            }
        })
    }
    return (
        <>
            <Header />
            <Sidebar />
            <section className="home-section">
                <section id="reg">
                    <h2 id='top'>Update</h2>

                    <form onSubmit={(e)=>{handleupdate(e)}}>
                        <div className="container">
                            <div className="row">
                                <span style={{ color: "red" }}></span>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">

                                        <select name="ctype" id="" className="form-select" required disabled>
                                            <option value={data.companyType} selected>{data.companyType}</option>
                                            <option value="Private">Private</option>
                                            <option value="limited">limited</option>
                                            <option value="partnership">partnership</option>
                                            <option value="opc">opc</option>
                                        </select> <label for="">Company Type</label>
                                    </div>
                                </div>
                                <br />
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text" required className="form-control" name="companyname" placeholder="Company Name" 
                                        value={companyname} 
                                        onChange={(e)=>{handlevalue(e,setcompanyname)}}
                                        /><label for="" >Company Name</label>
                                    </div>
                                </div>
                                <br />
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text" required className="form-control" name="cinnumber" placeholder="CIN Number" 
                                        value={cinnumber} 
                                        onChange={(e)=>{handlevalue(e,setcinnumber)}}
                                        />
                                        <label for="">CIN Number</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text" id="aadhar" required className="form-control" name="owneraadharn" pattern="['0-9']{12}" title="Please enter a valid aadhar number" minlength="12" maxlength="12" onkeyup="validate()" placeholder="Owner Aadhar Number" 
                                        value={owneraadharn}
                                        onChange={(e)=>{handlevalue(e,setowneraadharn)}}
                                        />
                                        <label for="">Owner Aadhar Number</label>
                                        <small id="aadhar-error"></small>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text" required className="form-control" id="pan" name="ownerpann" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" title="Please enter a valid pan card number" placeholder="Owner Pan Card Number" onkeyup="panvalidate()" 
                                         value={ownerpann}
                                         onChange={(e)=>{handlevalue(e,setownerpann)}}
                                        />
                                        <label for="">Owner Pan Card Number</label>
                                        <small id="pan-error"></small>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <select name="actype" id="" required className="form-select"  onChange={(e)=>{handlevalue(e,setactype)}}>
                                            <option value={actype} selected>{actype}</option>
                                            <option value="Current">Current</option>
                                            <option value="Saving">Saving</option>
                                            <option value="Joint">Joint</option>
                                        </select>
                                        <label for="">Account Type</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text" required className="form-control" id="oname" name="ownername" pattern="[A-Za-z]*\s{1}[a-zA-Z]*" placeholder="Owner Name" onkeyup="onamevalidate()" 
                                        value={ownername}
                                        onChange={(e)=>{handlevalue(e,setownername)}}
                                        />
                                        <label for="">Owner Name</label>
                                        <small id="ownername-error"></small>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text" required className="form-control" name="gstn" placeholder="Gst Number" 
                                         value={gstn}
                                         onChange={(e)=>{handlevalue(e,setgstn)}}
                                        />
                                        <label for="">Gst Number</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="email" name="email" id="" required className="form-control" placeholder="Email" 
                                        value={email}
                                        onChange={(e)=>{handlevalue(e,setemail)}}
                                        />
                                        <label for="">Email</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text" required className="form-control" id="cpann" name="companypann" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" title="Please enter a valid pan card number" placeholder="Company Pan Number " onkeyup="cpanvalidate()" 
                                         value={cpann}
                                         onChange={(e)=>{handlevalue(e,setcpann)}}
                                        />
                                        <label for="">Company Pan Number </label>
                                        <small id="cpan-error"></small>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="number" required className="form-control" name="acnumber" placeholder="Bank Account Number" 
                                         value={acnumber}
                                         onChange={(e)=>{handlevalue(e,setacnumber)}}
                                        />
                                        <label for="">Bank Account Number</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <textarea name="owneradd" id="" cols="30" rows="30" className="form-control" required placeholder="Owner Address" value={owneradd}
                                         onChange={(e)=>{handlevalue(e,setowneradd)}}
                                        >{owneradd}</textarea>
                                        <label for="">Owner Address</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">

                                    <br />
                                    <div className="form-floating">
                                        <textarea name="companyadd" id="" cols="60" rows="60" required className="form-control" placeholder="Company Located Address"  value={companyadd}
                                         onChange={(e)=>{handlevalue(e,setcompanyadd)}}
                                        >{companyadd}</textarea>
                                        <label for="">Company Located Address </label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text" id="" required className="form-control" name="ifsccode" placeholder="IFSC Code"
                                         value={ifsccode}
                                         onChange={(e)=>{handlevalue(e,setifsccode)}}
                                        />
                                        <label for="">IFSC Code</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text" required className="form-control" name="bankname" placeholder="Bank Name " 
                                         value={bankname}
                                         onChange={(e)=>{handlevalue(e,setbankname)}}
                                        />
                                        <label for="">Bank Name </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">

                                    <br />
                                    <div className="form-floating">
                                        <input type="text" name="accountholdername" id="" required className="form-control" pattern="[A-Za-z]*\{1}[a-zA-Z]*" placeholder="Account Holder Name" 
                                        value={accountholdername}
                                        onChange={(e)=>{handlevalue(e,setaccountholdername)}}
                                        />
                                        <label for="">Account Holder Name</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="url" name="domain" id="" className="form-control" required placeholder="Domain"
                                         value={domain}
                                         onChange={(e)=>{handlevalue(e,setdomain)}}
                                        />
                                        <label for="">Domain</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text" name="ip" id="" required className="form-control" pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}.[0-9]*" placeholder="IP"
                                         value={ip}
                                         onChange={(e)=>{handlevalue(e,setip)}}
                                        />
                                        <label for="">IP</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">

                                    <br />
                                    <div className="form-floating">
                                        <select name="service" id="" className="form-select"  onChange={(e)=>{handlevalue(e,setservice)}} required>
                                            <option value={service} selected>{service}</option>
                                            <option value="banking">BANKING</option>
                                            <option value="goverment">GOVERMENT</option>
                                            <option value="game">GAME</option>
                                            <option value="software">SOFTWARE</option>
                                            <option value="financial">FINANCIAL</option>
                                            <option value="seo">SEO</option>
                                        </select>
                                        <label for="">Service Asign</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <label for="">Mobile Number</label>
                                    <div className="form-check ">
                                        <select name="contrycode" id="" >
                                            <option value="<%=record.contrycode%>" selected></option>
                                            <option value="<%= result.dial_code%>"></option>
                                        </select>
                                        <input type="text" name="mobile" id="mobile" required pattern="[0-9]{10}" title="Please enter a valid Mobile number" maxlength="10" minlength="10" onkeyup="mobilevalidation()"
                                         value={mobile}
                                         onChange={(e)=>{handlevalue(e,setmobile)}}
                                        />
                                        <small id="mobile-error"></small>
                                    </div>
                                </div>
                                <div className="col-md-4">

                                </div>
                            </div>
                            <div className="row ">
                                <p style={{color:"red" ,fontSize:"12px",textAlign:'center'}}>{message}</p>
                                <a href="#top"> <div className="col-md-12" style={{ textAlign: "center" }}><button type="submit" className="btn btn-success mt-2 mb-2 ">Update</button></div></a>
                            </div>
                        </div>
                    </form>
                </section>

            </section>
        </>
    );
}

export default Memberregupdate;