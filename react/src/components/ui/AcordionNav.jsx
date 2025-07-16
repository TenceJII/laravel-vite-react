import React from "react";
import { NavLink } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Navigate = [
  { name: "HOME", to: "/" },
  { name: "DASHBOARD", to: "/dashboard" },
  { name: "NEW'S", to: "" },
  { name: "FASHION", to: "/" },
  { name: "TENS’ IDNs", to: "/" },
  { name: "TENS’ Worlds", to: "/" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AccordionNav = () => {
  return (
    <ul>
      {Navigate.map((item, index) =>
        item.name === "NEW'S" ? (
          <Accordion type="single" collapsible className="w-full" key={index}>
            <AccordionItem value={`item-${index}`} className="">
              <AccordionTrigger className="flex justify-between w-full py-8 text-left ">
                <span>{item.name}</span>
              </AccordionTrigger>
              <AccordionContent className="overflow-hidden text-sm transition-all">
                <div className="">
                  <NavLink
                    to={`${item.to}/sub-link-1`}
                    className={({ isActive }) =>
                      classNames(
                        "block text-black font-medium hover:text-gray-900",
                        {
                          "underline decoration-1 underline-offset-4": isActive,
                        }
                      )
                    }
                  >
                    Sub Link 1
                  </NavLink>
                  <NavLink
                    to={`${item.to}/sub-link-2`}
                    className={({ isActive }) =>
                      classNames(
                        "block text-black font-medium hover:text-gray-900",
                        {
                          "underline decoration-1 underline-offset-4": isActive,
                        }
                      )
                    }
                  >
                    Sub Link 2
                  </NavLink>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              classNames(
                "block  py-8 border-b border-black text-black font-medium hover:text-gray-900",
                {
                  "underline decoration-1 underline-offset-4": isActive,
                }
              )
            }
          >
            {item.name}
          </NavLink>
        )
      )}
    </ul>
  );
};

export default AccordionNav;
