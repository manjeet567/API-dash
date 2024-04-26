import { useEffect } from "react"
import { Link } from "react-router-dom";
function Sidebar() {
  useEffect(() => {
    const handleArrowClick = (e) => {
      const arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
    };

    const sidebarBtn = document.querySelector(".bx-menu");
    const handleSidebarBtnClick = () => {
      const sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("close");
    };

    const arrows = document.querySelectorAll(".arrow");
    arrows.forEach((arrow) => {
      arrow.addEventListener("click", handleArrowClick);
    });

    sidebarBtn.addEventListener("click", handleSidebarBtnClick);

    return () => {
      // Cleanup: remove event listeners when the component unmounts
      arrows.forEach((arrow) => {
        arrow.removeEventListener("click", handleArrowClick);
      });
      sidebarBtn.removeEventListener("click", handleSidebarBtnClick);
    };
  }, []); 

    return ( 
        <>
        <div class="sidebar close">
  <div class="logo-details">
      <i class='bx bx-menu' ></i>
    <span class="logo_name">APIs PARTNERS</span>
  </div>
  <ul class="nav-links">
    <li>
      <Link to="/dashboard">
      <i class="bi bi-list"></i>
        <span class="link_name">Dashboard</span>
      </Link>
      <ul class="sub-menu blank">
        <li><Link class="link_name" to="/dashboard">Dashboard</Link></li>
      </ul>
    </li>
    <li>
      <div class="iocn-link">
        <Link to="">
          <i class="bi bi-person-add"></i>
          <span class="link_name">Members</span>
        </Link>
        <i class='bx bxs-chevron-down arrow' ></i>
      </div>
      <ul class="sub-menu">
        <li><Link class="link_name" to="">Members</Link></li>
        <li><Link to="/memberregistraion">Registration</Link></li>
        <li><Link to="/members/Active">Active</Link></li>
        <li><Link to="/members/Pending">Pending</Link></li>
        <li><Link to="/members/Reject">Rejected</Link></li>
      </ul>
    </li>
    <li>
      <div class="iocn-link">
        <Link to="">
          <i class="bi bi-people"></i>
          <span class="link_name">Employee Master</span>
        </Link>
        <i class='bx bxs-chevron-down arrow' ></i>
      </div>
      <ul class="sub-menu">
        <li><Link class="link_name" to="">Employee Master</Link></li>
        <li><Link to="/employeereg">Registration</Link></li>
        <li><Link to="/employeelist">Employee list</Link></li>
        <li><Link to="/empmenu">Employee Menu</Link></li>
      </ul>
    </li>

    <li>
      <Link to="/wallet">
        <i class="bi bi-wallet2"></i>
        <span class="link_name" >Wallet</span>
      </Link>
      <ul class="sub-menu blank">
        <li><Link class="link_name" to="/wallet">Wallet</Link></li>
      </ul>
    </li>
    <li>
      <div class="iocn-link">
        <Link to="">
          <i class="fa fa-wrench" aria-hidden="true"></i>
          <span class="link_name">Service Master</span>
        </Link>
        <i class='bx bxs-chevron-down arrow' ></i>
      </div>
      <ul class="sub-menu">
        <li><Link class="link_name" to="">Service Master</Link></li>
        <li><Link to="/servicelist">Active Services</Link></li>
        <li><Link to="">Client Service</Link></li>
        <li><Link to="/b2bservices">B2B Services</Link></li>
        <li><Link to="">Payout Service</Link></li>
        <li><Link to="">Service Commission</Link></li>
        <li><Link to="">Services charge</Link></li>
      </ul>
    </li>
</ul>
</div>

        </>
     );
}

export default Sidebar;