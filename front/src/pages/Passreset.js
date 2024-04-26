function Passreset() {
    return (
        <>
            <section id="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="mainDiv">
                                <div className="cardStyle">
                                    <form id="signupForm">
                                        <h2 className="formTitle">
                                            Reset Your Password
                                        </h2>


                                        <div className="inputDiv">
                                            <label className="inputLabel" for="password">New Password</label>
                                            <input type="password" id="password" name="password" required/>
                                        </div>

                                        <div className="inputDiv">
                                            <label className="inputLabel" for="confirmPassword">Confirm Password</label>
                                            <input type="password" id="confirmPassword" name="confirmPassword"/>
                                        </div>

                                        <div className="buttonWrapper">
                                            <button type="submit" id="submitButton" onclick="validateSignupForm()" className="submitButton pure-button pure-button-primary">
                                                <span>Continue</span>

                                            </button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Passreset;