"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <div className="grid grid-cols-2 h-5/6 p-5 pt-7 bg-black ">
      <div className="rounded-full bg-white w-[60px] h-[60px] relative">
        <Image alt="Logo" src="/images/logo.png" height="60" width="60" />
      </div>
      <div className="grid grid-cols-3 px-5 pt-3">
        <div>
          <Button className="  px-4 py-1">Log In</Button>
        </div>
        <div>
          <Button className="absolute  px-4 py-1">Log Out</Button>
        </div>
        <div>Sign Out</div>
      </div>
    </div>
  );
};

export default Navbar;
