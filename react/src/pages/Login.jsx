import React from "react";
import image2 from "../assets/image2.png";
import { Input } from "../components/ui/input";
export default function Signup() {
  return (
    <>
      <div className="w-full grid-cols-12 overflow-hidden md:h-screen md:grid">
        <div className="flex items-center h-full max-w-[43rem] col-start-1 col-end-6 p-2">
          <img
            src={image2}
            className="relative object-cover w-full h-full rounded-xl"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center h-full col-start-7 col-end-10">
          <div className="flex items-center justify-center pt-5">
            <h1 className="text-4xl font-baskervville">LOGIN</h1>
          </div>
          <div className="w-full">
            <form action="" className="px-6 mt-10 ">
              <div className="space-y-4">
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-700 font-baskervville"
                >
                  Email Address
                </label>
                <div>
                  <Input></Input>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-700 font-baskervville"
                >
                  Password
                </label>
                <div>
                  <input
                    id="password"
                    type="password"
                    className="block w-full p-3 py-4 text-gray-900 border-0 rounded-none shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-10">
                <button className="w-full py-2 text-white bg-black font-baskervville">
                  SIGN IN
                </button>
              </div>
              <p className="mt-5 text-center font-baskervville">OR</p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
