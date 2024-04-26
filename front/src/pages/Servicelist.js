import Header from "./Header";
import Sidebar from "./Sidebar";

function Servicelist() {
    return (
        <>
            <Header />
            <Sidebar />
            <section class="home-section">
                <section id="servicelist">
                    <h2>Services</h2>
                    <div class="container" id="search">
                        <div class="row">
                            <div class="col-md-4" id="col">
                                <div class="search-box">
                                    <div class="col">
                                        <input type="text" name="company" id="input-box" placeholder="Search by company name" autocomplete="off" />
                                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                                    </div>
                                    <div class="result-box">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4" id="col">
                                <div class="search-box">
                                    <div class="col">
                                        <input type="text" name="memberid" id="input-box" placeholder="Search by memeberid" autocomplete="off" />
                                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                                    </div>
                                    <div class="result-box">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4" id="col">
                                <div class="search-box">
                                    <div class="col">
                                        <input type="text" name="mobile" id="input-box" placeholder="Search by mobile number" autocomplete="off" />
                                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                                    </div>
                                    <div class="result-box">
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-5" >
                                <div class="col-md-12">

                                    <h5 style={{color: "red"}}>sgg</h5>
                                    <table class="table table-border table-hover">
                                        <tr>
                                            <th>Company Name :  </th>
                                            <td>ghgfh</td>
                                        </tr>
                                        <tr>
                                            <th>Owner Name :  </th>
                                            <td>dfhdgfh</td>
                                        </tr>
                                        <tr>
                                            <th>Company Type :  </th>
                                            <td>gfhgfh</td>
                                        </tr>
                                        <tr>
                                            <th>Service Assigned :  </th>
                                            <td>gfhgfh</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Servicelist;