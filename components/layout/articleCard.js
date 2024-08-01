"use client";
import Image from "next/image";
import React, { useState } from "react";
import { TransitionLink } from "../utils/TransitionLink";
import { ArrowRight, Calendar } from "lucide-react";

function ArticleCard({ data }) {
  const [isHovered, setIsHovered] = useState(false);

  const article = data.attributes;

  return (
    <TransitionLink href={`/b/${article.slug}`}>
      <div
        className={`w-full h-full rounded-md overflow-hidden transition-all duration-300 ${
          isHovered ? "scale-[1.02]" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-48 rounded-md  overflow-hidden">
          <Image
            src={article.headerImage.data.attributes.url}
            width={800}
            height={800}
            alt=""
            className={` transition-all duration-300 ${
              isHovered ? "opacity-70" : "opacity-100"
            }`}
          />

          <div className="absolute bottom-0 left-0 flex gap-2 text-sm items-center">
            {article.tag1 && (
              <div className="bg-accent px-2 py-1 rounded-bl-md rounded-tr-md text-tblack font-medium flex gap-2 text-sm justify-content items-center">
                {article.tag1}
              </div>
            )}
            {article.tag2 && (
              <div className="bg-red px-2 py-1 rounded-t-md font-medium text-tblack flex gap-2 text-sm justify-content items-center">
                {article.tag2}
              </div>
            )}
          </div>

          <div
            className={`absolute top-0 right-0 -rotate-45 text-red transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <ArrowRight size={50} />
          </div>
        </div>

        <h1
          className={`text-lg font-bold mt-2 whitespace-normal leading-tight line-clamp-2 transition-all duration-300 ${
            isHovered ? "" : ""
          }`}
        >
          {article.Title}
        </h1>

        <div className="flex gap-1 text-sm opacity-70 items-center mt-1">
          <Calendar size={16} /> {article.date}
        </div>

        <div
          className={`border-b-[1px]  w-fit flex text-sm font-medium gap-1 items-center mt-4  border-tblack transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-80"
          }`}
        >
          Read more about it{" "}
          <ArrowRight
            size={18}
            className={`transition-all duration-300 ${
              isHovered ? "-rotate-45" : "rotate-0"
            }`}
          />
        </div>
      </div>
    </TransitionLink>
  );
}

export default ArticleCard;
