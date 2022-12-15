import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";

function LogicPage() {
  const [result, setResult] = React.useState(0);
  const formik = useFormik({
    initialValues: {
      input: "",
    },
    onSubmit: async (values, formikHelpers) => {
      try {
        const response = await axios.post(
          "http://localhost:3000/logic",
          values
        );
        formikHelpers.resetForm();
        setResult(response.data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    },
  });
  return (
    <div>
      <div className="hero min-h-screen bg-primary">
        <div className="flex-col">
          <div className="card mb-5 justify-content-center flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100 mt-5">
            <form className="card-body" onSubmit={formik.handleSubmit}>
              <label className="label mt-3 justify-center">
                <a href="#" className="label-text-alt">
                  Masukkan kalimat disini
                </a>
              </label>
              <div className="form-control">
                <input
                  // onChange={handleChange}
                  name="input"
                  type="text"
                  placeholder="Masukkan kalimat"
                  className="input input-bordered"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  value={formik.values.input}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-blue-700 text-white ">Submit</button>
              </div>
              <div>
                <a href="#" className="label-text-alt">
                  Hasil
                </a>
                <pre>{JSON.stringify(result.jumlahHuruf)}</pre>
                <pre>{JSON.stringify(result.message)}</pre>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogicPage;
