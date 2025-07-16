import React, { Fragment, useState, useEffect, useRef } from "react";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import { Navigate, Outlet, NavLink } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { UsersIcon } from "@heroicons/react/24/solid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AccordionNav from "../components/ui/AcordionNav";
import { UserStateContext } from "../context/ContextProvider";
import { Button, buttonVariants } from "@/components/ui/button";
import Home from "../pages/Home";

export default function DefaultLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavbar = (val) => {
    console.log(val);
    setIsOpen(val);
  };
  const closeNavbar = (val) => {
    console.log(val);
    setIsOpen(val);
  };

  const listNavigate = [
    { name: "HOME", to: "/" },
    { name: "DASHBOARD", to: "/dashboard" },
    { name: "NEW,S", to: "/" },
    { name: "FASHION", to: "/" },
    { name: "LOREM IDNs", to: "/" },
    { name: "LOREM Worlds", to: "/" },
  ];

  const navbarRef = useRef(null);
  useEffect(() => {
    const handleclikout = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleclikout);
    return () => {
      document.removeEventListener("mousedown", handleclikout);
    };
  }, [navbarRef]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const { currentUser, userToken } = UserStateContext();

  // if (!userToken) {
  //   return <Navigate to="login" />;
  // }

  const logout = (ev) => {
    ev.preventDefault();
    console.log("Logout");
  };

  return (
    <>
      <header className="fixed z-20 w-full ">
        <div className="flex items-center w-full px-2 py-4 bg-white border-b border-black xl:px-16">
          <div className="flex items-center lg:flex-col md:mx-auto gap-x-2">
            <div className="block md:hidden ">
              <Bars3Icon
                onClick={() => handleNavbar(!isOpen)}
                className="h-5"
              />
            </div>
            <Link
              to="/"
              className="text-lg font-semibold tracking-widest md:text-3xl font-kaisei "
            >
              LOREM IPSUM
            </Link>
            <div className="block lg:hidden ">
              <div className="flex items-center ">
                <div className="absolute right-0 px-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="">
                      <UserIcon className="h-5 stroke-black fill-white" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="bg-white border rounded-lg shadow-lg">
                      <DropdownMenuLabel>
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <UserIcon className="h-5 stroke-black fill-white" />
                          </div>
                          <div className="ml-3">
                            <div className="leading-none text-black ">
                              {currentUser.name}
                            </div>
                            <div className="text-xs leading-none text-gray-400 ">
                              {currentUser.email}
                            </div>
                          </div>
                        </div>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem as={Link} to="/profile">
                        <p className="font-baskervville ">Your Profile</p>
                      </DropdownMenuItem>
                      <DropdownMenuItem as={Link} to="/settings">
                        <p className="font-baskervville">Activity</p>
                      </DropdownMenuItem>
                      <DropdownMenuItem as={Link} to="/settings">
                        <p className="font-baskervville">Save</p>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={logout}>
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center gap-x-4 ">
                <div className="w-20  h-[1px]  bg-black "></div>
                <p className="text-sm ">MAGAZINE</p>
                <div className="w-20  h-[1px]  bg-black "></div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              to="/Signup"
              className="text-xl font-kaisei hover:underline underline-offset-2 decoration-1"
            >
              SIGN IN
            </Link>
          </div>
        </div>

        <div className="hidden py-2 bg-white shadow-md md:block">
          <div className="flex justify-center font-medium gap-x-9">
            {listNavigate.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  classNames(isActive ? "text-black " : "")
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
        <div className={`relative z-50 ${isOpen ? "block" : "hidden"}`}>
          <div className="fixed inset-0 bg-slate-600 opacity-10"></div>
          <nav
            ref={navbarRef}
            className="fixed top-0 bottom-0 left-0 flex flex-col w-5/6 max-w-sm px-6 py-6 overflow-y-auto bg-white border-r "
          >
            <div className="flex mb-3 underline underline-offset-2">
              <Link to="/" className="">
                <span className="object-center text-xl font-medium tracking-wide bg-center bg-repeat drop-shadow-xl hover:drop-shadow-sm bg-clip-text">
                  LOREM IPSUM
                </span>
              </Link>
              <button className="ml-auto" onClick={() => closeNavbar(!isOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-y-4">
              <AccordionNav />
            </div>
            <div className="mt-auto">
              <div className="flex flex-col pt-6 gap-y-6 ">
                <Button>LOGIN</Button>
                <Button>SIGN IN</Button>
              </div>
              <p className="my-4 text-xs text-center text-gray-400">
                <span> © 2023 Tensei, Inc.</span>
              </p>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
