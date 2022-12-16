import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function NavbarPage() {
  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    Swal.fire({
      title: "Apakah kamu ingin keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate("/login");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sampai jumpa",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
  return (
    <div className="navbar bg-primary-focus">
      <div className="flex-1">
        <div className="justify-center flex">
          <Link to={"/"}>
            <div className="w-40 rounded">
              <img src="http://getwell.co.id/wp-content/uploads/2021/07/logo.png" />
            </div>
          </Link>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 mr-5">
          <li>
            <Link to={"/logic"} className="text-neutral-content text-white">
              Logic
            </Link>
          </li>
          <li>
            <Link to={"/fibonaci"} className="text-neutral-content text-white">
              Fibonaci
            </Link>
          </li>
          <li>
            <a
              onClick={handleLogout}
              className="text-neutral-content text-white"
            >
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarPage;
