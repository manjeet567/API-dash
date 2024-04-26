import "./css/service.css"
function Searchservice() {
    return (
        <>
            <section className="home-section">
                <section id="servicelist">
                    <h2>Services</h2>
                    <form method="post">
                        <div className="container" id="search">
                            <div className="row">
                                <div className="col-md-6" id="col">
                                    <div className="search-box">
                                        <div className="col">
                                            <input type="text" name="company" id="input-box" placeholder="Search" autocomplete="off" />
                                            <button><i className="fa-solid fa-magnifying-glass"></i></button>
                                        </div>
                                        <div className="result-box">
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
                                <div className="row mt-5" >
                                    <div className="col-md-12">
                                        <h5 style={{color: "red"}}></h5>
                                        <table className="table table-border table-hover">
                                            <tr>
                                                <th>Company Name :  </th>
                                                <td>fsgg</td>
                                            </tr>
                                            <tr>
                                                <th>Owner Name :  </th>
                                                <td>fgfdsg</td>
                                            </tr>
                                            <tr>
                                                <th>Company Type :  </th>
                                                <td>dfsgdfg</td>
                                            </tr>
                                            <tr>
                                                <th>Service Assigned :  </th>
                                                <td>fsdgv</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>



                </section>
            </section>
        </>
    );
}

export default Searchservice;