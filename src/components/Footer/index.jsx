import React from "react";
import FooterLogo from "../../assets/images/footer-logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <footer className="bg-[#0054ff] py-14">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-1 gap-8 md:px-4 px-10 py-6 lg:py-8 md:grid-cols-4">
            <div className="flex md:block flex-col justify-center items-center text-center md:text-start">
              <div className="mb-8">
                <img src={FooterLogo} alt="" />
              </div>
              <ul className=" dark:text-[#84BAFE] font-medium ">
                <li className="mb-10">
                  A safe haven defi ecosystem built for the Base blockchain
                </li>

                <li className="mb-4 px-16 md:px-0">
                  <div className="dark:text-white text-[30px] flex justify-between">
                    <FaTelegram />
                    <FaFacebook />
                    <FaXTwitter />
                    <FaInstagram />
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex md:block flex-col justify-center items-center text-center md:text-start">
              <h2 className="mb-6 text-sm font-semibold text-gray-900  dark:text-white">
                Useful Links
              </h2>
              <ul className="text-gray-500 dark:text-[#84BAFE] font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Exchange
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex md:block flex-col justify-center items-center text-center md:text-start">
              <h2 className="mb-6 text-sm font-semibold text-gray-900  dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-[#84BAFE] font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms of Use
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex md:block flex-col justify-center items-center text-center md:text-start">
              <h2 className="mb-6 text-sm font-semibold text-gray-900  dark:text-white">
                Need Assistance? Email Us
              </h2>
              <div>
                <form className="flex items-center w-72 md:w-auto mx-auto">
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="voice-search"
                      className="bg-gray-50 rounded-[30px] text-gray-900 text-sm block w-full ps-5 p-4  dark:bg-[#000A1E] dark:placeholder-gray-400 dark:text-white"
                      placeholder="Support@BaseHaven.io"
                      required
                    />
                    <button
                      type="button"
                      className="absolute  inset-y-0 end-0 flex items-center pe-2"
                    >
                      <div className=" rounded-[20px] py-2 px-4 email-send">
                        Send
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
