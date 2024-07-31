"use client";
import { Calendar, Instagram } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ArticlePageSkeleton from "./skeletonArticlePage";
import { motion, AnimatePresence } from "framer-motion";

const ArticlePage = ({ tags, date, title, content, headerImage }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full h-full"
      >
        <div className="w-full mt-3">
          {/* Header with background image */}
          <header className="mb-8 relative h-96 rounded-lg overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${headerImage})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h2 className="text-3xl font-bold ">{title}</h2>
              <div className="flex gap-5 mt-2 items-center">
                <div className="flex gap-1 text-sm opacity-70 items-center">
                  <Calendar size={16} /> {date}
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
          </header>

          {/* Main content */}
          <main className="space-y-12 max-w-3xl mx-auto">
            {content.map((section, index) => (
              <section key={index}>
                <h3 className="text-3xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-700 leading-tight text-md">
                  {section.text}
                </p>
                {section.image && (
                  <div className="w-full mt-4 rounded-md h-60 overflow-hidden flex justify-center items-center">
                    <Image
                      src={section.image}
                      alt=""
                      width={1200}
                      height={1200}
                    />
                  </div>
                )}
              </section>
            ))}
          </main>

          {/* Footer content */}
          <footer className="flex items-center mx-auto max-w-3xl mt-12 py-6 border-t">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <Image
                src={"/images/ImageMarioCarcota.jpg"}
                width={200}
                height={200}
                alt="Mario Carcota"
              />
            </div>
            <div className="ml-4">
              <h4 className="text-xl font-bold">Mario Carcota</h4>
              <p className="text-gray-600  leading-tight text-balance">
                Web Engineer that automates your biggest problems
              </p>
            </div>
            <div></div>
          </footer>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const Article = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setArticleData(articleDataObj);
    }, 5000);

    // Cleanup the timer if the component unmounts before the timeout completes
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ArticlePageSkeleton />;
  }

  return articleData ? <ArticlePage {...articleData} /> : null;
};

export default Article;

const articleDataObj = {
  tags: ["TAG 1", "TAG 2", "TAG 3"],
  title: "How working remote saved my life...",
  date: "July 20, 2024",
  headerImage:
    "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  content: [
    {
      title: "First Section Title",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Second Section Title",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
};
