import React, { useState } from "react";
import Logo from "../../assets/images/logo.png";
import { RiDiscountPercentFill } from "react-icons/ri";
import { IoIosArrowRoundForward } from "react-icons/io";

import "./index.css";
function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div>
      <div className="text-center text-white flex items-center justify-center h-[35px] bg-[#0054FF] text-[11px] md:text-[16px] font-medium ">
        <RiDiscountPercentFill />
        <p className="ms-2">
          Bridge crypto for fee Starting at 0.75%! Let’s Exchanges!
        </p>
      </div>
      <header className="bg-headr">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={Logo} alt />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setNavOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Why BaseHaven
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              About us
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Team
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Roadmap
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              FAQ
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button className="launch-btn">
              <div className="flex items-center justify-center">
                Launch DAPP{" "}
                <span className="ms-2 text-[25px] ">
                  <IoIosArrowRoundForward className="font-black" />
                </span>
              </div>
            </button>
          </div>
        </nav>
        {/* Mobile menu, show/hide based on menu open state. */}
        <div
          className={`${!navOpen && "hidden"}  lg:hidden`}
          role="dialog"
          aria-modal="true"
        >
          {/* Background backdrop, show/hide based on slide-over state. */}
          <div className="fixed inset-0 z-10" />
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#01153dc5] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={Logo} alt />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setNavOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                  >
                    Why BaseHaven
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                  >
                    About us
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                  >
                    Roadmap
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white"
                  >
                    FAQ
                  </a>
                </div>
                <div className="py-6">
                  <button className="launch-btn w-[100%]">
                    <div className="flex items-center justify-center">
                      Launch DAPP{" "}
                      <span className="ms-2 text-[25px] ">
                        <IoIosArrowRoundForward className="font-black" />
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
