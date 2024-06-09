import React, { useState } from "react";
import "./index.css";
import { IoArrowDownCircle, IoArrowUpCircle } from "react-icons/io5";
function Faq() {
  const [fq1, setFq1] = useState(false);
  const [fq2, setFq2] = useState(false);
  const [fq3, setFq3] = useState(false);
  const [fq4, setFq4] = useState(false);

  return (
    <div className="faq-container py-10 md:py-36">
      <div className="container mx-auto  py-2 md:py-4 faq-bg px-4 md:px-16">
        <h1 className="text-center main-heading mt-8 md:mt-16 text-[29px] leading-12 mb-7 font-semibold">
          Frequently Asked Questions
        </h1>
        <div className="faq-box">
          <div className="flex justify-between items-center">
            <h1 className="main-heading text-[18px] font-medium">
              How long does a swap take on BaseHaven?
            </h1>
            {fq1 ? (
              <svg
                width={23}
                height={23}
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setFq1(!fq1)}
                className="cursor-pointer"
              >
                <rect
                  x={23}
                  y={23}
                  width={23}
                  height={23}
                  rx="11.5"
                  transform="rotate(-180 23 23)"
                  fill="#0054FF"
                />
                <path
                  d="M11.6389 15L11.6389 6.93333M11.6389 6.93333L15 10.2944M11.6389 6.93333L8.27778 10.2944"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setFq1(!fq1)}
                className="cursor-pointer"
                width={23}
                height={23}
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={23} height={23} rx="11.5" fill="#0054FF" />
                <path
                  d="M11.3611 8V16.0667M11.3611 16.0667L8 12.7056M11.3611 16.0667L14.7222 12.7056"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <div
            className={`text-[#CFD5E1] text-[14px] leading-8 py-4  ${
              fq1 ? "block" : "hidden"
            } `}
          >
            Each transaction on BaseHaven can take anywhere from 3 minutes to
            15, depending on the network traffic and what pairs are chosen. Each
            transaction is given 45 minutes for the user to make the deposit. If
            you make the deposit but your swap does not finish before the timer
            expires, do not worry as your swap will still be processed.
          </div>
        </div>

        <div className="faq-box">
          <div className="flex justify-between items-center">
            <h1 className="main-heading text-[18px] font-medium">
              Is the BaseHaven cross chain bridge secure?
            </h1>
            {fq2 ? (
              <svg
                width={23}
                height={23}
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setFq2(!fq2)}
                className="cursor-pointer"
              >
                <rect
                  x={23}
                  y={23}
                  width={23}
                  height={23}
                  rx="11.5"
                  transform="rotate(-180 23 23)"
                  fill="#0054FF"
                />
                <path
                  d="M11.6389 15L11.6389 6.93333M11.6389 6.93333L15 10.2944M11.6389 6.93333L8.27778 10.2944"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setFq2(!fq2)}
                className="cursor-pointer"
                width={23}
                height={23}
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={23} height={23} rx="11.5" fill="#0054FF" />
                <path
                  d="M11.3611 8V16.0667M11.3611 16.0667L8 12.7056M11.3611 16.0667L14.7222 12.7056"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <div
            className={`text-[#CFD5E1] text-[14px] leading-8 py-4  ${
              fq2 ? "block" : "hidden"
            } `}
          >
            Each transaction on BaseHaven can take anywhere from 3 minutes to
            15, depending on the network traffic and what pairs are chosen. Each
            transaction is given 45 minutes for the user to make the deposit. If
            you make the deposit but your swap does not finish before the timer
            expires, do not worry as your swap will still be processed.
          </div>
        </div>

        <div className="faq-box">
          <div className="flex justify-between items-center">
            <h1 className="main-heading text-[18px] font-medium">
              How does the BaseHaven bridge work?
            </h1>
            {fq3 ? (
              <svg
                onClick={() => setFq3(!fq3)}
                className="cursor-pointer"
                width={23}
                height={23}
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x={23}
                  y={23}
                  width={23}
                  height={23}
                  rx="11.5"
                  transform="rotate(-180 23 23)"
                  fill="#0054FF"
                />
                <path
                  d="M11.6389 15L11.6389 6.93333M11.6389 6.93333L15 10.2944M11.6389 6.93333L8.27778 10.2944"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setFq3(!fq3)}
                className="cursor-pointer"
                width={23}
                height={23}
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={23} height={23} rx="11.5" fill="#0054FF" />
                <path
                  d="M11.3611 8V16.0667M11.3611 16.0667L8 12.7056M11.3611 16.0667L14.7222 12.7056"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <div
            className={`text-[#CFD5E1] text-[14px] leading-8 py-4  ${
              fq3 ? "block" : "hidden"
            } `}
          >
            Each transaction on BaseHaven can take anywhere from 3 minutes to
            15, depending on the network traffic and what pairs are chosen. Each
            transaction is given 45 minutes for the user to make the deposit. If
            you make the deposit but your swap does not finish before the timer
            expires, do not worry as your swap will still be processed.
          </div>
        </div>

        <div className="faq-box">
          <div className="flex justify-between items-center">
            <h1 className="main-heading text-[18px] font-medium">
              What is the unique transaction ID and why is it important?
            </h1>
            {fq4 ? (
              <svg
                onClick={() => setFq4(!fq4)}
                className="cursor-pointer"
                width={23}
                height={23}
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x={23}
                  y={23}
                  width={23}
                  height={23}
                  rx="11.5"
                  transform="rotate(-180 23 23)"
                  fill="#0054FF"
                />
                <path
                  d="M11.6389 15L11.6389 6.93333M11.6389 6.93333L15 10.2944M11.6389 6.93333L8.27778 10.2944"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                onClick={() => setFq4(!fq4)}
                className="cursor-pointer"
                width={23}
                height={23}
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={23} height={23} rx="11.5" fill="#0054FF" />
                <path
                  d="M11.3611 8V16.0667M11.3611 16.0667L8 12.7056M11.3611 16.0667L14.7222 12.7056"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
          <div
            className={`text-[#CFD5E1] text-[14px] leading-8 py-4  ${
              fq4 ? "block" : "hidden"
            } `}
          >
            Each transaction on BaseHaven can take anywhere from 3 minutes to
            15, depending on the network traffic and what pairs are chosen. Each
            transaction is given 45 minutes for the user to make the deposit. If
            you make the deposit but your swap does not finish before the timer
            expires, do not worry as your swap will still be processed.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
