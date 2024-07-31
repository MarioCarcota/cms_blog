"use client";
import React from "react";

function ArticleCardSkeleton() {
  return (
    <div className="w-full h-full rounded-md overflow-hidden animate-pulse">
      <div className="relative w-full h-48 rounded-md overflow-hidden bg-gray-300">
        {/* Placeholder for tags */}
        <div className="absolute bottom-0 left-0 flex gap-2">
          <div className="bg-gray-400 w-16 h-6 rounded-bl-md rounded-tr-md"></div>
          <div className="bg-gray-400 w-16 h-6 rounded-t-md"></div>
        </div>
      </div>

      {/* Placeholder for title */}
      <div className="h-6 bg-gray-300 mt-2 rounded w-3/4"></div>

      {/* Placeholder for date */}
      <div className="flex gap-1 items-center mt-1">
        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
        <div className="h-4 bg-gray-300 rounded w-24"></div>
      </div>

      {/* Placeholder for "Read more" */}
      <div className="w-32 h-5 bg-gray-300 mt-4 rounded"></div>
    </div>
  );
}

export default ArticleCardSkeleton;
