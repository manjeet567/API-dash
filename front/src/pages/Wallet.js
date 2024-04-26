import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Wallet() {
    const [data,setData]=useState([])
    const[loadingData,setLoadingData]=useState(true)
    const[message,setmessage]=useState('')
    useEffect(()=>{
        try {
            fetch(`/get_users_wallet`).then(data=>data.json()).then((data)=>{
                console.log(data)
                if(data.status===200){
                    setData(data.apiData)
                    setLoadingData(false)
                }else{
                    setmessage('something went wrong')
                }
            })
        } catch (error) {
            console.log(error.message)
        }
    },[])
    return ( 
        <>
            <Header />
            <Sidebar />
            <section className="home-section">
                <section id="emplist">
                    <div className="container">

                        <h2>Wallet Details</h2>
                        <div className="row">
                            {loadingData && <h3>Data is loading...</h3>}
                            <div className="col-md-12 table-responsive-md">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>S.NO</th>
                                            <th>Mobile Number</th>
                                            <th>UserID</th>
                                            <th>Company Name</th>
                                            <th>Total Debit</th>
                                            <th>Total Credit</th>
                                            <th>Total wallet</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((item, key) => (
                                            <tr key={key}>
                                                <td>{key + 1}</td>
                                                <td>{item.owner_phone}</td>
                                                <td>{item.login_id}</td>
                                                <td>{item.company_name}</td>
                                                <td>{item.debit_amount}</td>
                                                <td>{item.credit_amount}</td>
                                                <td>{item.total_amount}</td>
                                                <td><Link to={`/walletDetails/${item.id}`}>View</Link></td>
                                            </tr>
                                        ))}
                                        {!data?.length ?
                                            <tr>
                                                <td colspan="8"><h3 style={{ textAlign: "center", color: "red" }}>No Member yet!</h3></td>
                                            </tr>
                                            : <></>
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                </section>
            </section>
        </>
     );
}

export default Wallet;