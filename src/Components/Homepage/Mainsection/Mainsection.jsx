import React from "react";
import "./mainsection.css";
import { MdLocationOn } from "react-icons/md";
import { CiSearch } from "react-icons/ci";


const Mainsection = () => {
  return (
    <div className="outer-mainsection-home">
      <div className="inner-mainsection-home">
        <div className="mainsection-leftside">
          <h1>Find the Best Freelancers for Any Job, <span>Online.</span></h1>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
          <div className="mainsection-search-bar">
            <div className="search-bar-icon">
                <CiSearch />
                <input type="text" placeholder="What service are you looking for" />
            </div>
            <div className="search-bar-address">
                <MdLocationOn />
                <p>Zip Code</p>

            </div>
            <button>Search</button>
          </div>
        </div>
        <div className="mainsection-rightside">
            <img src="/Images/Home/computer.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Mainsection;
