import Header from "./Header";
import Sidebar from "./Sidebar";

function Admindashboard() {
    return ( 
        <>
        <Header/>
        <Sidebar/>
        <section className="home-section">
   <section id="dashboard">
  <div className="container">
    <div className="row" id="wallet">
        <div className="col-md-3">
            <div className="card"  id="card1">
                <div className="card-body">
                    <i className="bi bi-currency-rupee"></i>
                    <span style={{fontSize: "30px",color: "white"}}>0.00</span>
                    <img src="/img/walletgif.gif" alt="" className="img-fluid"/>
                    <p><span>Main Wallet</span></p>
                </div>
              </div>
        </div>
        <div className="col-md-3">
            <div className="card"  id="card2">
                <div className="card-body">
                    <i className="bi bi-currency-rupee"></i>
                    <span style={{fontSize: "30px",color: "white"}}>0.00</span>
                    <img src="/img/walletgif.gif" alt=""  className="img-fluid"/>
                    <p><span>Aeps Wallet</span></p>
                   
                </div>
              </div>
        </div>
        <div className="col-md-3">
            <div className="card"  id="card3">
                <div className="card-body">
                    <i className="bi bi-currency-rupee"></i>
                    <span style={{fontSize: "30px",color: "white"}}>0.00</span>
                    <img src="/img/walletgif.gif" alt=""  className="img-fluid"/>
                    <p><span>Total Commision</span></p>
                    
                </div>
              </div>
        </div>
        <div className="col-md-3">
            <div className="card"  id="card4">
                <div className="card-body">
                    <i className="bi bi-currency-rupee"></i>
                    <span style={{fontSize: "30px",color: "white"}}>0.00</span>
                    <img src="/img/walletgif.gif" alt=""  className="img-fluid"/>
                    <p><span>Total Income</span></p>
                </div>
              </div>
        </div>
    </div>
  </div>
</section>
</section>
        </>
     );
}

export default Admindashboard;