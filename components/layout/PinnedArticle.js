"use client";
import { useState } from "react";
import { TransitionLink } from "../utils/TransitionLink";
import { ArrowRight, Calendar } from "lucide-react";

const PinnedArticle = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <TransitionLink href="/b/slug">
      <div
        className={`relative w-full h-96 bg-cover bg-center shadow rounded-md overflow-hidden transition-opacity duration-300 group ${
          isHovered ? "opacity-90" : "opacity-100"
        }`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1473172707857-f9e276582ab6?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-tblack to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-bwhite">
          <h2
            className={`text-3xl font-bold transition-all duration-300 ${
              isHovered ? "underline" : ""
            }`}
          >
            How working remote saved my life...
          </h2>
          <div className="flex gap-5 mt-2 items-center">
            <div className="flex gap-1 text-sm opacity-70 items-center">
              <Calendar size={16} /> July 20, 2024
            </div>
            <div className="flex gap-2 text-sm items-center">
              <div className="bg-accent px-2 py-1 rounded-md text-tblack font-medium flex gap-2 text-sm justify-content items-center">
                TAG 1
              </div>
              <div className="bg-red px-2 py-1 rounded-md font-medium text-tblack flex gap-2 text-sm justify-content items-center">
                TAG 2
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute top-0 right-0 -rotate-45 text-red transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <ArrowRight size={120} />
        </div>
      </div>
    </TransitionLink>
  );
};

export default PinnedArticle;
