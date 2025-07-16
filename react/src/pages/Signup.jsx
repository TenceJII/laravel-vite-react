import React, { useState } from "react";
import image2 from "../assets/image2.png";
import axiosClient from "../axios";
import { Navigate } from "react-router-dom";
import { UserStateContext } from "../context/ContextProvider";

export default function Signup() {
  const { setCurrentUser, setUserToken } = UserStateContext();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ __html: "" });

  const { currentUser, userToken } = UserStateContext();

  if (userToken) {
    return <Navigate to="/" />;
  }

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({ __html: "" });

    axiosClient
      .post("/signup", {
        name: fullName,
        email,
        password,
      })
      .then(({ data }) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
      })
      .catch((error) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce(
            (accum, next) => [...accum, ...next],
            []
          );
          console.log(finalErrors);
          setError({ __html: finalErrors.join("<br>") });
        }
        console.error(error);
      });
  };

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
            <h1 className="text-4xl font-baskervville">SIGN UP</h1>
          </div>

          {error.__html && (
            <div
              className="px-3 py-2 text-sm text-black border rounded font-kaisei"
              dangerouslySetInnerHTML={error}
            ></div>
          )}

          <form method="POST" onSubmit={onSubmit} className="w-full py-4 px-6 mt-10">
            <div className="space-y-4">
              <label
                htmlFor="full-name"
                className="block text-sm text-gray-700 font-baskervville"
              >
                UserName
              </label>
              <input
                id="full-name"
                type="text"
                placeholder="FullName"
                required
                value={fullName}
                onChange={(ev) => setFullName(ev.target.value)}
                className="block w-full p-3 py-4 text-gray-900 border-0 rounded-none shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-8 space-y-4 ">
              <label
                htmlFor="email"
                className="block text-sm text-gray-700 font-baskervville"
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="email address"
                id="email"
                required
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                className="block w-full p-3 py-4 text-gray-900 border-0 rounded-none shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-8 space-y-4">
              <label
                htmlFor="password"
                className="block text-sm text-gray-700 font-baskervville"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                className="block w-full p-3 py-4 text-gray-900 border-0 rounded-none shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
            <div className="mt-10">
              <button className="w-full py-2 text-white bg-black font-baskervville">
                SIGN UP
              </button>
            </div>
            <p className="my-5 text-center font-baskervville">OR</p>
            <div>
              <button className="w-full py-2 text-white bg-black font-baskervville">
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
