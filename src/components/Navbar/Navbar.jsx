import React from 'react';
import navImg from "../../assets/logo.png"
import coinImg from "../../assets/R.png"

const Navbar = ({availableBlance}) => {
    return (
        <div class="navbar max-w-[1200px] mx-auto">
        <div class="flex-1">
          <a class=" text-xl"><img className="w-[60px] h-[60px]" src={navImg} alt="" /></a>
        </div>
        <div class="flex items-center">
        <span className="mr-1">{availableBlance}</span>
        <span className="mr-1">coin</span>
        <img className="w-[25px] h-[25px]" src={coinImg} alt="" />
        </div>
      </div>
    );
};

export default Navbar;