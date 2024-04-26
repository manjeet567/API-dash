
function Usermailverfy() {
    return (
        <>
            <section className="home-section">
                <section id="userotp">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <div className="container" id="container">
                                    <header>
                                        <i className="bx bxs-check-shield"></i>
                                    </header>
                                    <p>We have send a OTP to user's Email account</p>
                                    <h4>Enter OTP Code</h4>
                                    <form action="/userotpverify" method="post">
                                        <div className="input-field">
                                            <input type="text" name="userotp" id="" className="form-control" />
                                            <span style={{color: "red"}}></span>
                                        </div>

                                        <button type="submit">Verify OTP</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>

                </section>



            </section>
        </>
    );
}

export default Usermailverfy;