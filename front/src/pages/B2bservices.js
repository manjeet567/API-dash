import Header from "./Header";
import Sidebar from "./Sidebar";

function B2bservices() {
    return ( 
        <>
        <Header/>
        <Sidebar/>
        <section class="home-section">
     <section id="servicelist " class="mt-5">
<form action="/b2bservice" method="post">
  <div class="container"  id="search">
    <div class="row">
      <div class="col-md-6" id="col">
        <div class="search-box">
          <div class="col">
          <input type="text" name="company" id="input-box" placeholder="Search" autocomplete="off" required/>
          <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div class="result-box">
        </div>
        </div>  
        </div>

      <div class="col-md-6"></div>

    </div>
  </div>
</form>
    
        <div class="container" >
          <div class="row" id="search">
            <div class="col-md-6" id="col">
              <div class="search-box">
                <div class="col">
                <input type="text" name="company" id="input-box" placeholder="Search" autocomplete="off" />
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
              
              </div>
              <div class="result-box">
              </div>
              </div>  
              </div>

            <div class="col-md-6">
                <h5 style={{color: "red"}}>dgdfsg</h5>
                <table>
                    <tr>
                        <th>Company Name : </th>
                        <td>ddsg</td>
                    </tr>
                </table>
                </div>
            </div>
          
 
            <div class="row mt-5" id="row2">
              <h2 style={{color: "{rgb(150, 212, 109)}"}}>B2B Services</h2>
        <form action="/addb2bservice/<%=record.id%>" method="post" id="form2" >
          <div class="col-md-12">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>B2B Services</th>
                  <td><button type="submit" class="btn btn-danger">Active</button></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Payout</td>
                  <td><input type="checkbox" name="service" id="" value="payout"/></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Payin</td>
                  <td><input type="checkbox" name="service" id="" value="payin"/></td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>

            </div>
        </div>
     </section>
</section>
        </>
     );
}

export default B2bservices;