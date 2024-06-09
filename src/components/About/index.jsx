import React from "react";
import "./index.css";
import { GoDotFill } from "react-icons/go";
import { TfiReload } from "react-icons/tfi";
import MainButton from "../MainButton";
import { FaGasPump } from "react-icons/fa6";
import { FaRobot } from "react-icons/fa6";
import { RiDiscountPercentFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import Token1 from "../../assets/images/about-logos/Logotype.png";
import Token2 from "../../assets/images/about-logos/Logotype-1.png";
import Token3 from "../../assets/images/about-logos/Logotype-2.png";
import Token4 from "../../assets/images/about-logos/Logotype-3.png";
import Token5 from "../../assets/images/about-logos/Logotype-4.png";
import Token6 from "../../assets/images/about-logos/Logotype-5.png";
import Token7 from "../../assets/images/about-logos/Logotype-6.png";
import Token8 from "../../assets/images/about-logos/Logotype-7.png";
import Token9 from "../../assets/images/about-logos/Logotype-8.png";
import Token10 from "../../assets/images/about-logos/Logotype-10.png";
import Token11 from "../../assets/images/about-logos/Logotype-11.png";
import Token12 from "../../assets/images/about-logos/Logotype-12.png";
import Token13 from "../../assets/images/about-logos/Logotype-13.png";
import Token14 from "../../assets/images/about-logos/Logotype-14.png";
import Token15 from "../../assets/images/about-logos/Logotype-15.png";
import Token16 from "../../assets/images/about-logos/Logotype-17.png";
import Token17 from "../../assets/images/about-logos/Logotype-18.png";
import Token18 from "../../assets/images/about-logos/Logotype-19.png";
import Token19 from "../../assets/images/about-logos/Logotype-20.png";
import Token20 from "../../assets/images/about-logos/Logotype-21.png";
import Token21 from "../../assets/images/about-logos/Logotype-22.png";
import Token22 from "../../assets/images/about-logos/Logotype-23.png";
import Token23 from "../../assets/images/about-logos/Logotype-24.png";
import Token24 from "../../assets/images/about-logos/Logotype-25.png";
import Token25 from "../../assets/images/about-logos/Logotype-26.png";
import Token26 from "../../assets/images/about-logos/Logotype-27.png";
import Token27 from "../../assets/images/about-logos/TrueUSD.png";

function About() {
  return (
    <div className="about-container">
      <div className="">
        <div className="md:ps-9 block md:flex justify-between w-[100%] about-sec-1">
          <div className="w-[100%] md:w-[60%]  text-left px-5 md:px-10">
            <div className="h-[350px] flex flex-col justify-center">
              <h1 className="text-start main-heading text-[29px] leading-12 mb-5 font-semibold">
                Why BaseHaven?
              </h1>
              <p className="leading-6 text-[#FFFFFFCC]">
                BaseHaven is more than just an ecosystem, we’re an ever-evolving
                technological hub dedicated to providing the most advanced and
                user-friendly DAPPs to the base blockchain. Providing
                accessibility to all of the top industry defi tools, BaseHaven
                ecosystem expands into all sectors in defi. With Basechain being
                founded by Coinbase, tens of millions of users will be onboarded
                and be seeking user friendly tools. Congratulations, you’re so
                early.
              </p>
            </div>
          </div>
          <div className=" md:w-[39%] mt-20 md:mt-0">
            <div className="about-right-content  w-[100%] md:w-[470px] h-[350px] about-right relative flex justify-center items-center md:border border-[#0054ff]">
              {/* <div className="flex justify-end">
                <div className="about-right-dots ">
                  <GoDotFill className="text-[#AFD861]" />
                  <GoDotFill className="text-[#AFD861]" />
                  <GoDotFill className="text-[#AFD861]" />
                </div>
              </div>
              <div className="relative">
                <div className="about-right-coin flex justify-center items-center">
                  <svg
                    width={47}
                    height={47}
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M46.3069 29.3081C43.1951 41.7936 30.5495 49.4176 18.0411 46.3039C5.55561 43.1825 -2.05618 30.5368 1.05565 18.0514C4.16749 5.56596 16.8055 -2.0581 29.2834 1.05563C41.7994 4.1312 49.4111 16.8151 46.3069 29.3081Z"
                      fill="#F7931A"
                    />
                    <path
                      d="M34.7227 20.6163C35.1419 17.5069 32.7793 15.8836 29.5404 14.7861L30.5464 10.5793L27.9857 9.96202L27.0102 14.0774C26.3319 13.9173 25.646 13.7573 24.9678 13.6201L25.9433 9.50476L23.3521 8.88745L22.3461 13.0943C21.7974 12.9647 21.2411 12.8656 20.6924 12.7361L17.1638 11.8901L16.516 14.6109C16.516 14.6109 18.4289 15.03 18.3603 15.0681C19.3968 15.3272 19.5949 16.0055 19.5568 16.5237L18.4213 21.3174C18.4899 21.3479 18.5813 21.3479 18.6804 21.4165C18.5813 21.386 18.5204 21.386 18.4213 21.3555L16.8666 28.062C16.7371 28.3821 16.4093 28.8394 15.7006 28.6793C15.7311 28.7098 13.8182 28.2221 13.8182 28.2221L12.6064 31.1714L15.9445 31.9488C16.5618 32.1088 17.1791 32.2384 17.7583 32.406L16.7523 36.651L19.313 37.2683L20.3189 33.0614C21.0353 33.252 21.7136 33.4196 22.3614 33.5797L21.3554 37.756L23.9161 38.3733L24.922 34.1284C29.2965 34.9057 32.566 34.5475 33.892 30.5617C34.959 27.3838 33.7929 25.5699 31.4609 24.3734C33.168 23.9848 34.4026 22.8797 34.7227 20.6163ZM28.9612 28.8699C28.2143 32.0478 22.8415 30.3941 21.1191 29.9749L22.4452 24.3353C24.198 24.7621 29.7385 25.5395 28.9612 28.8699ZM29.67 20.6163C28.9917 23.497 24.5181 22.11 23.0625 21.7518L24.2971 16.6381C25.7223 16.9886 30.3863 17.6059 29.67 20.6163Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex justify-end">
                  <div className="about-right-coin flex justify-center items-center">
                    <svg
                      width="47"
                      height="47"
                      viewBox="0 0 47 47"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.32 46.64C36.1993 46.64 46.64 36.1993 46.64 23.32C46.64 10.4407 36.1993 0 23.32 0C10.4407 0 0 10.4407 0 23.32C0 36.1993 10.4407 46.64 23.32 46.64Z"
                        fill="#0052FF"
                      />
                      <path
                        d="M23.4229 39.5255C32.4615 39.5255 39.7885 32.211 39.7885 23.1882C39.7885 14.1655 32.4615 6.85107 23.4229 6.85107C14.8477 6.85107 7.81293 13.4348 7.11426 21.815H28.7459V24.5615H7.11426C7.81293 32.9416 14.8477 39.5255 23.4229 39.5255Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div className="about-right-ellipse absolute top-[34%] left-[39%]">
                  <TfiReload />
                </div>
              </div>
              <div className="flex">
                <div className="about-right-dots-2 ">
                  <GoDotFill className="text-[#01C774]" />
                  <GoDotFill className="text-[#01C774]" />
                  <GoDotFill className="text-[#01C774]" />
                </div>
              </div> */}
              <div className="h-[100%] w-[100%] absolute left-[-40px] top-[20%]  flex justify-center items-center">
                <iframe
                  src="https://my.spline.design/basehavencopy-08a275482d0f377517b61e2455bc2f1a/"
                  frameborder="0"
                  width="100%"
                  height="100%"
                  className=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:block mt-28 min-h-[600px]">
          <h1 className="text-center main-heading text-[29px] leading-12 mb-5 font-semibold">
            About BaseHaven
          </h1>
          <div className="flex justify-center">
            <div className="haven-cards haven-card-1  border-s-[1px] border-[#ffb730] rounded-tl-[10px] rounded-bl-[10px] border-e-[1px]">
              <div className="p-3 h-[40px] w-[40px] flex justify-center items-center rounded bg-[#FFB83026]">
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.8055 0C8.07012 0 4.81075 2.20938 3.07125 5.49412H0V10.5796H6.1425C6.31575 7.3395 8.77975 4.76788 11.8046 4.76788C14.8295 4.76788 17.2935 7.3395 17.4667 10.5796H23.6093V5.49412H20.538C18.7994 2.20938 15.5391 0 11.8038 0H11.8055ZM0 11.4852V19.6884H6.1495V11.4852H0ZM17.4615 11.4852V19.6884H23.611V11.4852H17.4615Z"
                    fill="#FFB830"
                  />
                </svg>
              </div>
              <div className="mt-4 text-[14px]">
                The easiest way to bridge ANY asset to Base: Supporting over 30
                blockchains and 150+ pairs
              </div>
              <div className="h-[43%] flex justify-start items-end self-end">
                <MainButton className={"mt-20"} />
              </div>
            </div>
            <div className="haven-cards haven-card-2 border-[#0054FF] border-e-[1px]">
              <div className="p-3 h-[40px] w-[40px] flex justify-center items-center rounded bg-[#01C77426]">
                <FaGasPump className="text-[#01c774]" />
              </div>
              <div className="mt-4 text-[14px]">
                SmartGAS technology for gasless contract interactions
              </div>
              <div className="h-[50%] flex justify-start items-end self-end">
                <MainButton className={"mt-20"} />
              </div>
            </div>
            <div className="haven-cards haven-card-3  border-[#00C2FF] border-e-[1px]">
              <div className="p-3 h-[40px] w-[40px] flex justify-center items-center rounded bg-[#00C2FF14]">
                <FaRobot className="text-[#00c3ff]" />
              </div>
              <div className="mt-4 text-[14px]">
                The only MEV protection DEX on Base chain 
              </div>
              <div className="h-[50%] flex justify-start items-end self-end">
                <MainButton className={"mt-20"} />
              </div>
            </div>
            <div className="haven-cards haven-card-4 border-e-[1px] border-[#ff248e] rounded-br-[10px] rounded-tr-[10px]">
              <div className="p-3 h-[40px] w-[40px] flex justify-center items-center rounded bg-[#FF248D4D]">
                <RiDiscountPercentFill className="text-[#ff248e]" />
              </div>
              <div className="mt-4 text-[14px]">
                The easiest way to bridge ANY asset to Base: Supporting over 30
                blockchains and 150+ pairs
              </div>
              <div className="h-[40%] flex justify-start items-end self-end">
                <MainButton className={"mt-20"} />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:hidden mt-28 p-2">
          <Swiper
            cssMode={true}
            navigation={false}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            spaceBetween={20}
            loop={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper px-4 "
          >
            <SwiperSlide>
              <div className="haven-cards w-[100%] h-[250px] xl:w-[257px] px-20 py-10 xl:p-[30px] border-t-[1px] border-[#ffb730] rounded-tl-[20px] rounded-tr-[20px] border-b-[1px]">
                <div className="p-3 h-[40px] w-[40px] flex justify-center items-center rounded bg-[#FFB83026]">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8055 0C8.07012 0 4.81075 2.20938 3.07125 5.49412H0V10.5796H6.1425C6.31575 7.3395 8.77975 4.76788 11.8046 4.76788C14.8295 4.76788 17.2935 7.3395 17.4667 10.5796H23.6093V5.49412H20.538C18.7994 2.20938 15.5391 0 11.8038 0H11.8055ZM0 11.4852V19.6884H6.1495V11.4852H0ZM17.4615 11.4852V19.6884H23.611V11.4852H17.4615Z"
                      fill="#FFB830"
                    />
                  </svg>
                </div>
                <div className="mt-4 text-[14px]">
                  The easiest way to bridge ANY asset to Base: Supporting over
                  30 blockchains and 150+ pairs
                </div>
                <MainButton className={"mt-5"} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="haven-cards w-[100%] h-[250px] xl:w-[257px] px-20 py-10 xl:py-[30px] xl:px-[30px] border-t-[1px] border-[#0054FF] rounded-tl-[20px] rounded-tr-[20px] border-b-[1px]">
                <div className="p-3 h-[40px] w-[40px] flex justify-center items-center rounded bg-[#01C77426]">
                  <FaGasPump className="text-[#01c774]" />
                </div>
                <div className="mt-4 text-[14px]">
                  SmartGAS technology for gasless contract interactions
                </div>
                <MainButton className={"mt-6"} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="haven-cards w-[100%] h-[250px] xl:w-[257px] px-20 py-10 xl:p-[30px] border-t-[1px] border-[#00C2FF] rounded-tl-[20px] rounded-tr-[20px] border-b-[1px]">
                <div className="p-3 h-[40px] w-[40px] flex justify-center items-center rounded bg-[#00C2FF14]">
                  <FaRobot className="text-[#00c3ff]" />
                </div>
                <div className="mt-4 text-[14px]">
                  The only MEV protection DEX on Base chain 
                </div>
                <MainButton className={"mt-6"} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="haven-cards w-[100%] h-[250px] xl:w-[257px] px-20 py-10 xl:p-[30px] border-t-[1px] border-[#ff248e] rounded-tl-[20px] rounded-tr-[20px] border-b-[1px]">
                <div className="p-3 h-[40px] w-[40px] flex justify-center items-center rounded bg-[#FF248D4D]">
                  <RiDiscountPercentFill className="text-[#ff248e]" />
                </div>
                <div className="mt-4 text-[14px]">
                  The easiest way to bridge ANY asset to Base: Supporting over
                  30 blockchains and 150+ pairs
                </div>
                <MainButton className={"mt-6"} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* <div className="mt-28">
        <div className="text-center main-heading text-[29px] leading-12 mb-7 font-semibold">
          Supported Tokens
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src={Token1} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token2} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token3} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token4} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token5} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token6} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token7} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token8} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token9} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token10} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token11} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token12} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token13} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token14} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token15} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token16} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token17} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token18} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token19} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token20} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token21} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token22} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token23} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token24} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token25} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token26} height={100} width={250} alt />
            </div>
            <div className="slide">
              <img src={Token27} height={100} width={250} alt />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default About;
