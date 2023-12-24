import React from "react";
import avater from "../assets/contact.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { passwordvalidate } from "../helper/validate";

const Password = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordvalidate,
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
          <div className="border border-black p-5 bg-gray-300 rounded-2xl">
            <h1 className="text-center font-bold text-3xl"> Hello Again!</h1>
            <form action="" className="m-10" onSubmit={formik.handleSubmit}>
              <div className="text-center">
                <img
                  src={avater}
                  alt=""
                  className="bg-gray-100 border border-black ml-10 object-center bg-cover w-[200px] h-[200px] rounded-full p-2"
                />
              </div>
              <div className="text-center">
                <input
                  {...formik.getFieldProps("password")}
                  className="m-5 outline-none border border-black rounded-3xl px-5 py-1"
                  type="password"
                  placeholder="Password"
                  name="password"
                  id=""
                />

                <br />
                <button
                  type="submit"
                  className="bg-blue-600 rounded-3xl px-5 hover:bg-red-300"
                >
                  Let's Go
                </button>
              </div>
              <p className="mt-5">
                Forget Password?
                <Link to="/recovery" className="underline text-blue-600">
                   Recovery Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
