import React from "react";
import avater from "../assets/contact.png";
import { Link } from "react-router-dom"
import { useFormik } from "formik";
import { converttobase } from "../helper/convert";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import {registervalidation} from "../helper/validate"

const Register = () => {
  const [file, setfile] = useState()
  const onupload = async(e) => {
    let base = await converttobase(e.target.files[0]);
    setfile(base);
  }
  const formik = useFormik({
    initialValues: {
      username:"",
      email:"",
      password:""
    },
    validate:registervalidation,
    validateOnBlur: false,
    validateOnChange: false, 
    onSubmit: async values => {
      values = Object.assign(values, {profile:file || " "})
      console.log(values);
    }

  })
  return (
    <>
      <div className="conmtainer mx-auto">
        <Toaster position="bottom-center"></Toaster>
        <div className="h-screen flex justify-center items-center">
          <div className="bg-gray-200 p-5 rounded-xl">
            <h1 className="text-center text-3xl font-bold m-3">Rgister</h1>
            <p className="text-center text-gray-500 text-sm">
              {" "}
              Join the commuinty
            </p>
            <div className="m-10">
              <form action="" onSubmit={formik.handleSubmit}>
                <div className="text-center">
                  <input
                    type="file"
                    name="file"
                    id="image"
                    onChange={onupload}
                    className="hidden"
                  />
                  <label htmlFor="image">
                    <img
                      src={file || avater}
                      alt=""
                      className="bg-gray-100 border border-black ml-10 object-center bg-cover w-[200px] h-[200px] rounded-full p-2 cursor-pointer m-5"
                    />
                  </label>
                </div>
                <label htmlFor="username"></label>
                <input
                  {...formik.getFieldProps("username")}
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  className="flex outline-none bg-transparent  border border-black rounded m-1 px-3"
                />{" "}
                <br />
                <label htmlFor="email"></label>
                <input
                  {...formik.getFieldProps("email")}
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                  className="flex outline-none bg-transparent  border border-black rounded m-1  px-3"
                />{" "}
                <br />
                <label htmlFor="password"></label>
                <input
                  {...formik.getFieldProps("password")}
                  type="password"
                  name="password"
                  placeholder="password"
                  id="password"
                  className="flex outline-none bg-transparent  border border-black rounded m-1 px-3"
                />
                <button
                  type="submit"
                  className="bg-blue-600 rounded-3xl px-5 hover:bg-red-300 ml-20 mt-5"
                >
                  Resiter
                </button>
              </form>
              <p className="text-sm mt-3">
                you already Regitser?
                <Link
                  to="/"
                  className="underline text-blue-800 font-bold hover:text-red-500"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
