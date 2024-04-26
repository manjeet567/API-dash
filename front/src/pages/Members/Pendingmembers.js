import { useEffect, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Link, useParams } from "react-router-dom";

function Pendingmembers() {
    const { status } = useParams()
    const [data, setData] = useState([])
    const [message, setMessage] = useState('')
    const [loadingData, setLoadingData] = useState(true)
    useEffect(() => {
        setLoadingData(true)
        fetch(`/userlist?status=${status}`).then(result => result.json()).then((data) => {
            // console.log(data)
            if (data.status === 200) {
                setData(data.apiData)
                setLoadingData(false)
            } else {
                setMessage(data.message)
            }
        })
    }, [status])
    const handlestatus = (e, id, updatestatus) => {
        fetch(`/update_user_status?id=${id}&status=${updatestatus}&activestatus=${status}`).then(result => result.json()).then((data) => {
            //console.log('update',data)
            if (data.status === 200) {
                setData(data.apiData)
                setLoadingData(false)
            } else {
                setMessage(data.message)
            }
        })
    }
    return (
        <>
            <Header />
            <Sidebar />
            <section className="home-section">
                <section id="pending">
                    <div className="container">
                        <div className="row">
                            <h2>{status} Members</h2>
                            <span style={{ color: "red", fontSize: "12px", textAlign: "center" }}>{message}</span>
                            {loadingData && <h3>Data is Loading...</h3>}
                            <div className="col-md-12 table-responsive-md">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>S.NO.</th>
                                            <th>Username</th>
                                            <th>Mobile</th>
                                            <th>Owner Name</th>
                                            <th>Company Name</th>
                                            <th>View more</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((item, key) => (
                                            <tr key={key}>
                                                <td>{key + 1}</td>
                                                <td>{item.memberid}</td>
                                                <td>{item.mobile}</td>
                                                <td>{item.ownerName}</td>
                                                <td>{item.companyName}</td>
                                                <td><Link to={`/memberupdate/${item.id}`}><button className="btn btn-light">View more</button></Link></td>
                                                <td>
                                                    <div className="dropdown">
                                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" >{item.accountstatus}
                                                        </button>
                                                        {item.accountstatus === 'Pending' ?
                                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                <li><Link class="dropdown-item" to="" onClick={(e) => { handlestatus(e, item.id, 'Active') }}>Actve</Link></li>
                                                                <li><Link class="dropdown-item" to="" onClick={(e) => { handlestatus(e, item.id, 'Reject') }}>Reject</Link></li>
                                                            </ul>
                                                            : item.accountstatus === 'Active' ?
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><Link class="dropdown-item" to="" onClick={(e) => { handlestatus(e, item.id, 'Reject') }}>Reject</Link></li>
                                                                </ul>
                                                                :
                                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                                    <li><Link class="dropdown-item" to="" onClick={(e) => { handlestatus(e, item.id, 'Active') }}>Actve</Link></li>
                                                                </ul>
                                                        }
                                                    </div>
                                                </td>
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

            </section >
        </>
    );
}

export default Pendingmembers;