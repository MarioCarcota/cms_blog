"use client";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ArticlePageSkeleton from "./skeletonArticlePage";
import { motion, AnimatePresence } from "framer-motion";
import { remark } from "remark";
import html from "remark-html";

const ArticlePage = ({ data, content }) => {
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
              style={{
                backgroundImage: `url("${data.headerImage.data.attributes.url}")`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h2 className="text-3xl font-bold ">{data.Title}</h2>
              <div className="flex gap-5 mt-2 items-center">
                <div className="flex gap-1 text-sm opacity-70 items-center">
                  <Calendar size={16} /> {data.date}
                </div>
                <div className="flex gap-2 text-sm items-center">
                  {data.tag1 && (
                    <div className="bg-accent px-2 py-1 rounded-md text-tblack font-medium flex gap-2 text-sm justify-content items-center">
                      {data.tag1}
                    </div>
                  )}
                  {data.tag2 && (
                    <div className="bg-red px-2 py-1 rounded-md font-medium text-tblack flex gap-2 text-sm justify-content items-center">
                      {data.tag2}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>

          {/* Main content */}
          <main
            className="space-y-6 max-w-3xl mx-auto"
            dangerouslySetInnerHTML={{ __html: content }}
          ></main>

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

const Article = (data) => {
  const [isLoading, setIsLoading] = useState(true);
  const [articleData, setArticleData] = useState(null);
  const [contentHtml, setContentHtml] = useState("");

  useEffect(() => {
    const processContent = async () => {
      if (data) {
        try {
          const processedContent = await remark()
            .use(html)
            .process(data.data.cont);
          setContentHtml(processedContent.toString());
          setArticleData(data.data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error processing content:", error);
        }
      }
    };

    processContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <ArticlePageSkeleton />;
  }

  return articleData ? (
    <ArticlePage data={articleData} content={contentHtml} />
  ) : null;
};

export default Article;
