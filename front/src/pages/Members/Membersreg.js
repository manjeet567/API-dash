import { useEffect, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";

function Membersreg() {
    const[ctype,setctype]=useState('')
    const[companyname,setcompanyname]=useState('')
    const[owneraadharn,setowneraadharn]=useState('')
    const[ownerpann,setownerpann]=useState('')
    const[cinnumber,setcinnumber]=useState('')
    const[ownername,setownername]=useState('')
    const[gstn,setgstn]=useState('')
    const[email,setemail]=useState('')
    const[cpann,setcpann]=useState('')
    const[acnumber,setacnumber]=useState('')
    const[owneradd,setowneradd]=useState('')
    const[companyadd,setcompanyadd]=useState('')
    const[ifsccode,setifsccode]=useState('')
    const[bankname,setbankname]=useState('')
    const[accountholdername,setaccountholdername]=useState('')
    const[domain,setdomain]=useState('')
    const[actype,setactype]=useState('')
    const[service,setservice]=useState('')
    const[ip,setip]=useState('')
    const[mobile,setmobile]=useState('')
    const[ownerimg,setownerimg]=useState(null)
    const[sign,setsign]=useState(null)
    const[afimg,setafimg]=useState(null)
    const[cpanimg,setcpanimg]=useState(null)
    const[abimg,setabimg]=useState(null)
    const[gstimage,setgstimage]=useState(null)
    const[cinimg,setcinimg]=useState(null)
    const[payslip,setpayslip]=useState(null)
    const[opanimg,setopanimg]=useState(null)
    const[message,setMessage]=useState('')
    const handleform =(e)=>{
        console.log('submit')
        e.preventDefault()
        const formdata=new FormData()
        formdata.append('ctype',ctype)
        formdata.append('companyname',companyname)
        formdata.append('owneraadharn',owneraadharn)
        formdata.append('ownername',ownername)
        formdata.append('ownerpann',ownerpann)
        formdata.append('cinnumber',cinnumber)
        formdata.append('gstn',gstn)
        formdata.append('email',email)
        formdata.append('cpann',cpann)
        formdata.append('acnumber',acnumber)
        formdata.append('companyadd',companyadd)
        formdata.append('ifsccode',ifsccode)
        formdata.append('owneradd',owneradd)
        formdata.append('bankname',bankname)
        formdata.append('domain',domain)
        formdata.append('accountholdername',accountholdername)
        formdata.append('actype',actype)
        formdata.append('service',service)
        formdata.append('ip',ip)
        formdata.append('mobile',mobile)
        formdata.append('ownerimg',ownerimg)
        formdata.append('sign',sign)
        formdata.append('gstimage',gstimage)
        formdata.append('cinimg',cinimg)
        formdata.append('payslip',payslip)
        formdata.append('opanimg',opanimg)
        formdata.append('abimg',abimg)
        formdata.append('afimg',afimg)
        formdata.append('cpanimg',cpanimg)
        fetch('/memberregistraion',{
            method:"Post",
            body:formdata
        }).then(result=>result.json()).then((data)=>{
            console.log(data)
            if(data.status===201){
                setMessage(data.message)
            }else{
                setMessage(data.message)
            }
        })
    }
    const handlevalue=(e,func)=>{
        func(e.target.value)
    }
  const handlefiles=(e,func)=>{
    console.log(e.target.files[0])
    func(e.target.files[0])
  }

    return (
        <>
        <Header/>
        <Sidebar/>
            <section className="home-section">
                <section id="reg">
                    <h2 id="top">Registration</h2>
                    <p style={{color: "red",textAlign: "center"}}></p>

                    <form onSubmit={(e)=>{handleform(e)}}>
                        <div className="container">
                            <div className="row">
                              
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">

                                        <select name="ctype" id="" className="form-select"     onChange={(e)=>{handlevalue(e,setctype)}} required>
                                            <option value="private">Private</option>
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

                                        <input type="text"     className="form-control" name="companyname" placeholder="Company Name" required
                                        onChange={(e)=>{handlevalue(e,setcompanyname)}}
                                        /><label for="" >Company Name</label>
                                    </div>
                                </div>
                                <br />
                                <div className="col-md-4">
                                    <br />
                                    <div className="mx-auto" style={{marginLeft: "100px"}}>
                                        <label className="label" ></label>
                                            <input type="file"  className="form-control" required
                                            onChange={(e)=>{setownerimg(e.target.files[0])}}
                                            />
                                        
                                        <br />
                                        <label className="label" > </label>
                                            <input type="file" className="form-control" required
                                            onChange={(e)=>{handlefiles(e,setsign)}}
                                            />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text" id="aadhar"     className="form-control" name="owneraadharn" pattern="['0-9']{12}" title="Please enter a valid aadhar number" minlength="12" maxlength="12" onkeyup="validate()" placeholder="Owner Aadhar Number" 
                                        onChange={(e)=>{handlevalue(e,setowneraadharn)}} required
                                        />
                                        <label for="">Owner Aadhar Number</label>
                                        <small id="aadhar-error"></small>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text"     className="form-control" id="pan" name="ownerpann" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" title="Please enter a valid pan card number" placeholder="Owner Pan Card Number" onkeyup="panvalidate()" 
                                        onChange={(e)=>{handlevalue(e,setownerpann)}} required
                                        />
                                        <label for="">Owner Pan Card Number</label>
                                        <small id="pan-error"></small>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text"     className="form-control" name="cinnumber" placeholder="CIN Number" 
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
                                        <input type="text"     className="form-control" id="oname" name="ownername" pattern="[A-Za-z]*\s{1}[a-zA-Z]*" placeholder="Owner Name" onkeyup="onamevalidate()" 
                                        onChange={(e)=>{handlevalue(e,setownername)}} required
                                        />
                                        <label for="">Owner Name</label>
                                        <small id="ownername-error"></small>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text"     className="form-control" name="gstn" placeholder="Gst Number" 
                                        onChange={(e)=>{handlevalue(e,setgstn)}} required
                                        />
                                        <label for="">Gst Number</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="email" name="email" id=""     className="form-control" placeholder="Email" 
                                        onChange={(e)=>{handlevalue(e,setemail)}} required
                                        />
                                        <label for="">Email</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text"     className="form-control" id="cpann" name="companypann" pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" title="Please enter a valid pan card number" placeholder="Company Pan Number " onkeyup="cpanvalidate()" 
                                        onChange={(e)=>{handlevalue(e,setcpann)}} required
                                        />
                                        <label for="">Company Pan Number </label>
                                        <small id="cpan-error"></small>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="number"     className="form-control" name="acnumber" placeholder="Bank Account Number" 
                                        onChange={(e)=>{handlevalue(e,setacnumber)}} required
                                        />
                                        <label for="">Bank Account Number</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <textarea name="owneradd" id="" cols="30" rows="30" className="form-control"     placeholder="Owner Address"
                                        onChange={(e)=>{handlevalue(e,setowneradd)}} required
                                        ></textarea>
                                        <label for="">Owner Address</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">

                                    <br />
                                    <div className="form-floating">
                                        <textarea name="companyadd" id="" cols="60" rows="60"     className="form-control" placeholder="Company Located Address"
                                        onChange={(e)=>{handlevalue(e,setcompanyadd)}} required
                                        ></textarea>
                                        <label for="">Company Located Address </label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text" id=""     className="form-control" name="ifsccode" placeholder="IFSC Code" 
                                        onChange={(e)=>{handlevalue(e,setifsccode)}} required
                                        />
                                        <label for="">IFSC Code</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text"     className="form-control" name="bankname" placeholder="Bank Name " 
                                        onChange={(e)=>{handlevalue(e,setbankname)}} required
                                        />
                                        <label for="">Bank Name </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">

                                    <br />
                                    <div className="form-floating">
                                        <input type="text" name="accountholdername" id=""     className="form-control"  pattern="[A-Za-z]*\{1}[a-zA-Z]*" placeholder="Account Holder Name" 
                                        onChange={(e)=>{handlevalue(e,setaccountholdername)}} required
                                        />
                                        <label for="">Account Holder Name</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="url" name="domain" id="" className="form-control"     placeholder="Domain" 
                                        onChange={(e)=>{handlevalue(e,setdomain)}} required
                                        /> 
                                        <label for="">Domain</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <select name="actype" id=""     className="form-select" onChange={(e)=>{handlevalue(e,setactype)}} required>
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
                                        <select name="service" id="" className="form-select"     onChange={(e)=>{handlevalue(e,setservice)}} required>
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
                                    <div className="form-floating">
                                        <input type="file" name="afimg" id="" className="form-control" accept=".jpg,.png"  onChange={(e)=>{handlefiles(e,setafimg)}}    required/>
                                        <label for="">Aadhar Front Image</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="text" name="ip" id=""     className="form-control" pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}.[0-9]*" placeholder="IP" 
                                        onChange={(e)=>{handlevalue(e,setip)}} required
                                        />
                                        <label for="">IP</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">

                                    <br />
                                    <label for="">Mobile Number</label>
                                    <div className="form-check ">
                                        <select name="contrycode" id="" >
                                            <option value="<%= result.dial_code%>"></option>
                                        </select>
                                        <input type="text" name="mobile" id="mobile"     pattern="[0-9]{10}" title="Please enter a valid Mobile number" maxlength="10" minlength="10" onkeyup="mobilevalidation()"
                                        onChange={(e)=>{handlevalue(e,setmobile)}} required
                                        />
                                            <small id="mobile-error"></small>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="file" name="cpanimg" id="" className="form-control" accept="application/pdf"    onChange={(e)=>{handlefiles(e,setcpanimg)}} required/>
                                            <label for="">Company Pan Card Image</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="file" name="abimg" id="" className="form-control" accept=".jpg,.png"   onChange={(e)=>{handlefiles(e,setabimg)}}  required/>
                                            <label for="">Aadhar Back Image</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">

                                    <br />
                                    <div className="form-floating">
                                        <input type="file" name="gstimage" id="" className="form-control" accept="application/pdf"     title="GST Image"
                                        onChange={(e)=>{setgstimage(e.target.files[0])}} required
                                        />
                                            <label for="">GST Image</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="file" name="cinimg" id="" className="form-control" accept="application/pdf"     placeholder="CIN Image"
                                        onChange={(e)=>{setcinimg(e.target.files[0])}} required
                                        />
                                            <label for="">CIN Image</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="file" name="payslip" id="" className="form-control" accept="application/pdf"    
                                        onChange={(e)=>{setpayslip(e.target.files[0])}} required
                                        />
                                            <label for="">Payment Slip</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <br />
                                    <div className="form-floating">
                                        <input type="file" name="opanimg" id="" className="form-control" accept=".jpg,.png"     
                                        onChange={(e)=>{setopanimg(e.target.files[0])}} required
                                        />
                                            <label for="">Owner Pan Card Image</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                            <span style={{color:"red",fontSize:"12px",textAlign:"center"}}>{message}</span>
                               <a href="#top"> <div className="col-md-12" style={{textAlign: "center"}}><button type="submit" className="btn btn-success mt-2 mb-2 ">Register</button></div></a>
                            </div>
                        </div>
                    </form>


                </section>

            </section>
        </>
    );
}

export default Membersreg;