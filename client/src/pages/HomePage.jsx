import useSWR from "swr";
import axios from "axios";
import { useFormik } from "formik";
import { mutate } from "swr";
import Swal from "sweetalert2";

function HomePage() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      address: "",
    },
    onSubmit: async (values, formikHelpers) => {
      try {
        await axios({
          method: "POST",
          url: "http://localhost:3000/user/register",
          data: values,
        });
        formikHelpers.resetForm();
        mutate("http://localhost:3000/user/register");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    },
  });

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data } = useSWR("http://localhost:3000/user", fetcher);
  return (
    <div>
      <div className="hero min-h-screen bg-primary">
        <div className="flex-col">
          <div className="card mb-5 justify-content-center flex-shrink-0 w-full max-w-2xl shadow-xl bg-base-100 mt-10">
            <form className="card-body" onSubmit={formik.handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  autoComplete="off"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
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
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  autoComplete="off"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  name="address"
                  type="text"
                  placeholder="address"
                  className="input input-bordered"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  autoComplete="off"
                />
                <label className="label mt-3">
                  <a href="#" className="label-text-alt">
                    By creating an account, you agree to the Terms of Service
                    and acknowledge our Privacy Policy.
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-700 text-white">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex-col bg-primary p-10 ">
        <div className="overflow-x-auto justify-center flex">
          <table className="table table-compact w-30 shadow-xl">
            <thead className="bg-blue">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((user) => {
                return (
                  <tr key={user.id} className="odd:bg-white even:bg-blue-100">
                    <td className="p-3 text-sm text-gray-700">{user.id}</td>
                    <td className="p-3 text-sm text-gray-700">{user.name}</td>
                    <td className="p-3 text-sm text-gray-700">{user.email}</td>
                    <td className="p-3 text-sm text-gray-700">
                      {user.password}
                    </td>
                    <td className="p-3 text-sm text-gray-700">
                      {user.address}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
