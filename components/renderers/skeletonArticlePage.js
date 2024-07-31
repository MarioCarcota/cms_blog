"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

const ArticlePageSkeleton = () => {
  return (
    <AnimatePresence className="w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full"
      >
        <div className="w-full mt-3 animate-pulse">
          {/* Header with background image */}
          <header className="mb-8 relative h-96 rounded-lg overflow-hidden bg-gray-300">
            <div className="absolute bottom-0 left-0 p-6">
              <div className="h-8 bg-gray-400 rounded w-3/4 mb-2"></div>
              <div className="flex gap-5 mt-2 items-center">
                <div className="h-4 bg-gray-400 rounded w-24"></div>
                <div className="flex gap-2">
                  <div className="h-6 bg-gray-400 rounded w-16"></div>
                  <div className="h-6 bg-gray-400 rounded w-16"></div>
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main className="space-y-12 max-w-3xl mx-auto">
            {[1, 2].map((_, index) => (
              <section key={index}>
                <div className="h-8 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
                {index === 0 && (
                  <div className="w-full mt-4 rounded-md h-60 bg-gray-300"></div>
                )}
              </section>
            ))}
          </main>

          {/* Footer content */}
          <footer className="flex items-center mx-auto max-w-3xl mt-12 py-6 border-t">
            <div className="w-16 h-16 rounded-full bg-gray-300"></div>
            <div className="ml-4">
              <div className="h-6 bg-gray-300 rounded w-32 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-48"></div>
            </div>
          </footer>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ArticlePageSkeleton;
