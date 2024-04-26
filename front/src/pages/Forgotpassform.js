function Forgotpassform() {
    return (
        <>
            <section id="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h3>Forgot Password</h3>
                            <br/><br/>
                                <form action="/forgotpass" method="post">
                                    <div className="form-floating">
                                        <input type="email" name="email" id="" className="form-control" placeholder="Enter Gmail Id"/>
                                            <label for="">Enter Gmail Id</label>
                                    </div>
                                    <button type="submit" className="form-control mt-2 mb-2 btn btn-success">Send OTP</button>
                                </form>

                            </div>
                                <div className="col-md-4"></div>
                        </div>
                    </div>
            </section>
        </>
    );
}

export default Forgotpassform;