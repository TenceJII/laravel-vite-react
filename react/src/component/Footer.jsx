import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";

export default function Footer() {
  return (
    <footer className="w-full text-white bg-black py-9">
      <div className="w-full px-3 mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 ">
          <div className="col-end-6 lg:col-start-2">
            <div className="my-5 md:my-8">
              <h1 className="text-4xl font-medium font-kaisei ">LOREM IPSUM</h1>
            </div>
            <div>
              <p className="text-base text-justify">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here
              </p>
            </div>
            <div className="flex flex-col py-8">
              <label htmlFor="email" className="">
                Email
              </label>
              <Input></Input>
            </div>
          </div>
          <div className="col-start-7 col-end-9">
            <div className="my-5 md:my-8">
              <h1 className="text-base font-semibold tracking-widest">
                ABOUT US
              </h1>
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="hover:underline underline-offset-1">
                <Link to="https://portofolio-me-seven.vercel.app/">
                  Portopholio
                </Link>
              </div>
              <div className="hover:underline underline-offset-1">
                <Link>Program Us</Link>
              </div>
              <div className="hover:underline underline-offset-1">
                <Link>Privacy Policy</Link>
              </div>
              <div className="hover:underline underline-offset-1">
                <Link>Terms & Conditions</Link>
              </div>
            </div>
          </div>
          <div className="col-start-9 col-end-11">
            <div className="">
              <div className="my-5 md:my-8">
                <h1 className="text-base font-semibold tracking-widest">
                  {" "}
                  SERVICE
                </h1>
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="hover:underline underline-offset-1">
                  <Link>Contact Us</Link>
                </div>
                <div className="hover:underline underline-offset-1">
                  <Link>Help</Link>
                </div>{" "}
                <div className="hover:underline underline-offset-1">
                  <Link>Status Order</Link>
                </div>{" "}
                <div className="hover:underline underline-offset-1">
                  <Link>Email</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
