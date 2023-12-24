import React from "react";
import avater from "../assets/contact.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { converttobase } from "../helper/convert";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { profilevalidation } from "../helper/validate";


const Profile = () => {
  const [file, setfile] = useState();
  const onupload = async (e) => {
    let base = await converttobase(e.target.files[0]);
    setfile(base);
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      lastname: "",
      mobile: "",
      email: "",
      address: "",
    },
    validate: profilevalidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = Object.assign(values, { profile: file || " " });
      console.log(values);
    },
  });
  return (
    <>
      <div className="conmtainer mx-auto">
        <Toaster position="bottom-center"></Toaster>
        <div className="h-screen flex justify-center items-center">
          <div className="bg-gray-200 p-5 rounded-xl">
            <h1 className="text-center text-3xl font-bold m-3">Profile</h1>
            <p className="text-center text-gray-500 text-sm">
              {" "}
              You can Update the Profile
            </p>
            <div className="m-10">
              <form action="" onSubmit={formik.handleSubmit}>
                <div className="text-center flex justify-center">
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
                      className="bg-gray-100 border flex border-black ml-20 object-center bg-cover w-[200px] h-[200px] rounded-full p-2 cursor-pointer m-5"
                    />
                  </label>
                </div>
                <div className="flex m-5">
                  <label htmlFor="username"></label>
                  <input
                    {...formik.getFieldProps("username")}
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className="flex outline-none bg-transparent  border border-black rounded m-1 px-3"
                  />{" "}
                  <label htmlFor="lastname"></label>
                  <input
                    {...formik.getFieldProps("lastname")}
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="lastname"
                    className="flex outline-none bg-transparent  border border-black rounded m-1 px-3"
                  />{" "}
                </div>
                <div className="flex m-5">
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
                  <label htmlFor="mobile"></label>
                  <input
                    {...formik.getFieldProps("mobile")}
                    type="text"
                    name="mobile"
                    placeholder="mobile"
                    id="mobile"
                    inputMode="numeric"
                    className="appearance-none flex outline-none bg-transparent  border border-black rounded m-1 px-3"
                  />
                </div>
                <div className="flex m-5">
                  <label htmlFor="address"></label>
                  <input
                    {...formik.getFieldProps("address")}
                    type="address"
                    name="address"
                    id="address"
                    placeholder="Address"
                    className="flex outline-none bg-transparent  border border-black rounded m-1  px-3 w-2/3 gap-2"
                  />
                </div>
                <br />

                <button
                  type="submit"
                  className="bg-blue-600 rounded-3xl px-5 flex justify-center w-2/3 hover:bg-red-300 ml-20"
                >
                  Update
                </button>
              </form>
              <p className="text-sm mt-2">
                come back later?
                <Link
                  to="/"
                  className="underline text-blue-800 font-bold hover:text-red-500"
                >
                  Logout
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
