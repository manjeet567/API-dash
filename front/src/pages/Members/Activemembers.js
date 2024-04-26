import Header from "../Header";
import Sidebar from "../Sidebar";

function Activemembers() {
    return ( 
        <>
        <Header/>
        <Sidebar/>
        <section className="home-section">
    <section id="pending">
        <div className="container">
            <div className="row">
                <h2>Active Members</h2>
                <div className="col-md-12 table-responsive-md">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>S.NO.</th>
                                <th>Username</th>
                                <th>Mobile</th>
                                <th>Owner Name</th>
                                <th>Company Name</th>
                                <th>Update</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>gvdsgf</td>
                                <td>sdfgfsdg</td>
                                <td>sdfgsfg</td>
                                <td>dsgsg</td>
                                <td>dsgsdg</td>
                                <td><a  href="/updatereg/<%=result.id%>"><button className="btn btn-light">View More</button></a></td>
                                <td>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                          <li><a className="dropdown-item" href="/toreject/<%=result.id%>">Reject</a></li>
                                        </ul>
                                      </div>
                                </td>
                            </tr>
                    <tr>
                        <td colspan="7"><h3 style={{color: "red",textAlign:"center"}}>No Active Member yet!</h3></td>
                    </tr>
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

export default Activemembers;