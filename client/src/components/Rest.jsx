import React from "react";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { restpassword } from "../helper/validate";

const Rest = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confitm_password: "",
    },
    validate: restpassword,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <div className="conainer mx-auto">
        <Toaster position="bottom-center"></Toaster>
        <div className="flex items-center justify-center h-screen">
          <div className="border border-black p-5 bg-gray-100 rounded-2xl">
            <h1 className="text-center font-bold text-3xl"> Rest!</h1>
          <p className="text-center text-gray-500">Enter you are new password</p>
            <form action="" className="m-10" onSubmit={formik.handleSubmit}>
  
              <div className="text-center">
                <input
                  {...formik.getFieldProps("password")}
                  className="m-5 outline-none border border-black rounded-3xl px-5 py-1"
                  type="password"
                  placeholder="New Password"
                  name="password"
                  id=""
                />
                <input
                  {...formik.getFieldProps("confirm_password")}
                  className="m-5 outline-none border border-black rounded-3xl px-5 py-1"
                  type="password"
                  placeholder="confirm Password"
                  name="confirm_password"
                  id=""
                />

                <br />
                <button
                  type="submit"
                  className="bg-blue-600 rounded-3xl px-5 hover:bg-red-300 mt-5"
                >
                  confirm
                </button>
              </div>
              {/* <p className="mt-5">
                Forget Password?
                <Link to="/recovery" className="underline text-blue-600">
                  Recovery Now
                </Link>
              </p> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rest;
