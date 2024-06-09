import React from "react";
import "./index.css";
import Person1 from "../../assets/images/team-1.png";
import Person2 from "../../assets/images/team-2.png";
import Person3 from "../../assets/images/team-3.png";

function Team() {
  return (
    <div className="team-container relative">
      <div className="about-team-ifram absolute h-[100%] w-[100%] top-[-60%]">
        <iframe
          src="https://my.spline.design/gitnesssplinetest-3718b0c46410ea258adedbcefed9e504/"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div className="py-28">
        <h1 className="text-center main-heading text-[29px] leading-12 mb-8 font-semibold">
          Our Team
        </h1>
        <div className="flex justify-center">
          <div className="md:flex md:justify-between w-[90%] md:h-[400px] md:w-[95%] lg:w-[80%]">
            <div className="team-card team-card-1 w-[100%] md:w-[317px] py-5 px-5 self-end ">
              <div className="flex items-center">
                <div>
                  <img
                    src={Person1}
                    className="h-[39px] w-[39px] rounded-[50%] object-cover"
                  />
                </div>
                <div className="ms-2 ">
                  <h1>Jezo</h1>
                  <p className="text-gray-300">@JezoOfficial</p>
                </div>
              </div>
              <p className="leading-7 mt-3">
                Over eight years of experience in the cryptocurrency sector and
                has led development teams at enterprise-level blockchain
                operations. He builds to scale 
              </p>
            </div>
            <div className="team-card team-card-2 w-[100%] md:w-[317px] py-5 px-5 self-start my-14 md:my-0">
              <div className="flex items-center">
                <div>
                  <img
                    src={Person2}
                    className="h-[39px] w-[39px] rounded-[50%] object-cover"
                  />
                </div>
                <div className="ms-2 ">
                  <h1>Brandon</h1>
                  <p className="text-gray-300">@BrandonOfficial</p>
                </div>
              </div>
              <p className="leading-7 mt-3">
                Extensive experience in marketing and social media management
                for various tech startups, now spearheads community growth,
                marketing strategies, and brand awareness at BaseHaven.
              </p>
            </div>
            <div className="team-card team-card-3 w-[100%] md:w-[317px] py-5 px-5 self-end">
              <div className="flex items-center">
                <div>
                  <img
                    src={Person3}
                    className="h-[39px] w-[39px] rounded-[50%] object-cover"
                  />
                </div>
                <div className="ms-2 ">
                  <h1>Steve</h1>
                  <p className="text-gray-300">@SteveOfficial</p>
                </div>
              </div>
              <p className="leading-7 mt-3">
                With three years of dedication to Web3 research and business
                model innovation, leading the project's strategic planning and
                market research, and with a solid experience in marketing and
                managing Chinese public relations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
