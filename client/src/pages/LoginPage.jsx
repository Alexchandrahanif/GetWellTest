import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function LoginPage() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const { data } = await axios.post(
          "http://localhost:3000/user/login",
          values
        );
        localStorage.setItem("access_token", data.access_token);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login berhasil",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.response.data.message}`,
        });
      }
    },
  });
  return (
    <div>
      <div className="hero min-h-screen bg-primary-focus">
        <div className="flex-col">
          <div className="justify-center flex mt-5">
            <div className="w-40 rounded">
              <img src="http://getwell.co.id/wp-content/uploads/2021/07/logo.png" />
            </div>
          </div>
          <div className="card mb-5 justify-content-center flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 mt-5">
            <form className="card-body" onSubmit={formik.handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  // onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  autoComplete="off"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  // onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  autoComplete="off"
                />
                <label className="label mt-3">
                  <a href="#" className="label-text-alt">
                    By continuing, you agree to the Terms of Service and
                    acknowledge our Privacy Policy.
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-700 text-white ">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
