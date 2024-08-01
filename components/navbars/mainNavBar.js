"use client";
import { BookDashed } from "lucide-react";
import { TransitionLink } from "../utils/TransitionLink";
import { SearchBar } from "../utils/searchBar";

const MainNavBar = () => {
  return (
    <nav className="bg-white z-50 p-4 border-b-[1px] flex items-center justify-between relative">
      <NavLeft />
      <NavRight />
    </nav>
  );
};

const Logo = () => {
  return (
    <TransitionLink href={"/"}>
      <div className="flex justify-center items-center gap-1">
        <BookDashed stroke="#EC4E20" size={30} />
        <h1 className="md:block hidden text-2xl text-tblack font-bold">
          Mario&apos;s Blog
        </h1>
      </div>
    </TransitionLink>
  );
};

const NavLeft = () => {
  return (
    <div className="flex items-center gap-6">
      <Logo />
    </div>
  );
};

const NavRight = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default MainNavBar;
