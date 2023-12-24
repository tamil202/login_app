import React from "react";
// import {Toaster} from "react-hot-toast "

const Recovery = () => {
 
  return (
    <>
      <div className="conainer mx-auto">
        {/* <Toaster position="bottom-center"></Toaster> */}
        <div className="flex items-center justify-center h-screen">
          <div className="border border-black p-5 bg-gray-100 rounded-2xl">
            <h1 className="text-center font-bold text-3xl">Recovery</h1>
            <p className="text-center text-gray-500">Enter the OPT Recovery the password</p>
            <form action="" className="m-10" >
              
              <div className="text-center">
                <div className="text-gray-500 m-2">Enter the 6 digit OTP or Email</div>
                <input
                  className="mt-4 outline-none border border-black rounded-3xl px-5 py-1 flex"
                  type="password"
                  placeholder="OTP"
                  name="password"
                  id=""
                />

                <br />
                <button
                  type="submit"
                  className="bg-blue-600 rounded-3xl px-5 hover:bg-red-300"
                >
                  Recovery
                </button>
              </div>
              <p className="mt-5">
                you can't get OTP?
                <button to="/recovery" className="underline text-blue-600">
                  Resend
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recovery;
