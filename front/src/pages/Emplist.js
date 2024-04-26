import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Emplist() {
    const [data, setData] = useState([])
    const [message, setMessage] = useState('')
    const [loadingData, setLoadingData] = useState(true)
    useEffect(() => {
        fetch(`/employee_list`).then(result => result.json()).then((data) => {
            if (data.status === 200) {
                setData(data.apiData)
                setLoadingData(false)
            } else {
                setMessage(data.message)
            }
        })
    }, [])
    return (
        <>
            <Header />
            <Sidebar />
            <section className="home-section">
                <section id="emplist">
                    <div className="container">

                        <h2>Employees</h2>
                        <div className="row">
                            {loadingData && <h3>Data is loading...</h3>}
                            <div className="col-md-12 table-responsive-md">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>S.NO</th>
                                            <th>Employee Name</th>
                                            <th>Email</th>
                                            <th>Mobile</th>
                                            <th>Designation</th>
                                            <th>Department</th>
                                            <th>User'ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((item, key) => (
                                            <tr key={key}>
                                                <td>{key + 1}</td>
                                                <td>{item.empname}</td>
                                                <td>{item.email}</td>
                                                <td>{item.mobile}</td>
                                                <td>{item.designation}</td>
                                                <td>{item.dept}</td>
                                                <td>{item.empID}</td>
                                            </tr>
                                        ))}
                                        {!data?.length ?
                                            <tr>
                                                <td colspan="7"><h3 style={{ textAlign: "center", color: "red" }}>No Member yet!</h3></td>
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

export default Emplist;