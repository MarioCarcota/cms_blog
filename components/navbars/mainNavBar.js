"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookDashed,
  MenuIcon,
  SearchIcon,
  Star,
  XIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { TransitionLink } from "../utils/TransitionLink";

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
    <div className="flex justify-center items-center gap-1">
      <BookDashed stroke="#EC4E20" size={30} />
      <h1 className="md:block hidden text-2xl text-tblack font-bold">
        Mario&apos;s Blog
      </h1>
    </div>
  );
};

const NavLeft = () => {
  return (
    <TransitionLink href={"/"}>
      <div className="flex items-center gap-6">
        <Logo />
      </div>
    </TransitionLink>
  );
};

const NavRight = () => {
  return (
    <div>
      <SearchInput />
    </div>
  );
};

export default MainNavBar;

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.metaKey && e.key === "s") {
        e.preventDefault();
        inputRef.current.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const clearInput = () => {
    setSearchTerm("");
    inputRef.current.focus();
  };

  return (
    <div className="relative w-fit mx-auto">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search an article..."
        className="w-30 py-2 text-sm pl-10 pr-14 text-tblack bg-white border rounded-md focus:outline-none focus:ring-2 focus:ring-red"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="absolute text-gray-400 inset-y-0 left-0 flex items-center pl-3">
        {searchTerm ? (
          <button onClick={clearInput} className="focus:outline-none">
            <XIcon size={20} />
          </button>
        ) : (
          <SearchIcon size={20} />
        )}
      </div>
      <div className="absolute inset-y-0 right-0 md:flex hidden items-center pr-3">
        <span className="px-2 py-1 text-xs font-semibold text-gray-600 bg-gray-200 rounded-md">
          ⌘S
        </span>
      </div>
    </div>
  );
};
