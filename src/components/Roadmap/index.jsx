import React from "react";
import "./index.css";
import { IoRocket } from "react-icons/io5";
import { MdInsertChartOutlined } from "react-icons/md";
import { FaCoins } from "react-icons/fa";

function Roadmap() {
  return (
    <div className="road-map-container">
      <div className="container mx-auto p-4 py-20 flex flex-col justify-center items-center md:block">
        <h1 className="text-center main-heading mt-16 text-[29px] leading-12 mb-7 font-semibold">
          Roadmap
        </h1>
        <div className="block md:flex justify-between">
          <div className="w-[349px] md:w-[369px]">
            <div className="flex justify-center mb-10">
              <div className="flex items-center w-[150px] bg-[#FFB83014] py-2 px-3 rounded-[10px] border border-[#FFB830]">
                <IoRocket className="me-3 text-[#FFB830] text-[25px]" />
                <span>Q2 2024</span>
              </div>
            </div>
            <ul className="roadmaplist">
              <li>SmartGAS & MEV protected DEX</li>
              <li>
                Custom BASE token purchasing using any cross chain
                cryptocurrency
              </li>
              <li>Decentralised bridge option </li>
              <li>DAO Voting protocol</li>
              <li>FIAT Onramp</li>
            </ul>
          </div>
          <div className="w-[194px] border mt-5 border-[#0054FF] h-[1px] text-[#0054FF] hidden md:block"></div>
          <div className="w-[349px] md:w-[369px]">
            <div className="flex justify-center mb-10">
              <div className="flex w-[150px] items-center bg-[#01C77414] py-2 px-3 rounded-[10px] border border-[#01C774] ">
                <MdInsertChartOutlined className="me-3 text-[#01C774] text-[25px]" />
                <span>Q4 2024</span>
              </div>
            </div>
            <ul className="roadmaplist list2">
              <li>NFT Marketplace</li>
              <li>NFT Cross chain bridge</li>
              <li>YIELD Lending</li>
              <li>BaseChain Launchpad</li>
            </ul>
          </div>
          <div className="w-[194px] border mt-5 border-[#0054FF] h-[1px] text-[#0054FF] hidden md:block "></div>

          <div className="w-[349px] md:w-[369px]">
            <div className="flex justify-center mb-10">
              <div className="flex w-[150px] items-center bg-[#FF248D14] py-2 px-3 rounded-[10px] border border-[#FF248D] ">
                <FaCoins className="me-3 text-[#FF248D] text-[25px]" />
                <span>Q4 2024</span>
              </div>
            </div>

            <ul className="roadmaplist list3">
              <li>Flash loans</li>
              <li>Base Token generator</li>
              <li> NFT Staking Protocols</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
