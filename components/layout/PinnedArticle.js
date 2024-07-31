"use client";
import { useEffect, useState } from "react";
import { TransitionLink } from "../utils/TransitionLink";
import { ArrowRight, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PinnedArticle = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPinnedArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPinnedArticle = async () => {
    const res = await fetch("/api/articlePinned");
    const data = await res.json();

    const firstArticle = data.data.slice(0, 1);

    setArticle(firstArticle);
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {loading ? (
        <div className="mb-8 w-full animate-pulse relative h-96 rounded-lg overflow-hidden bg-gray-300">
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
        </div>
      ) : (
        article.map((sarticle, index) => (
          <motion.div
            key={`${sarticle.id}-${index}`}
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TransitionLink href={`/b/${sarticle.attributes.slug}`}>
              <div
                className={`relative w-full h-96 bg-cover bg-center shadow rounded-md overflow-hidden transition-opacity duration-300 group ${
                  isHovered ? "opacity-90" : "opacity-100"
                }`}
                style={{
                  backgroundImage: `url("http://127.0.0.1:1337${sarticle.attributes.headerImage.data.attributes.url}")`,
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
                    {sarticle.attributes.Title}
                  </h2>
                  <div className="flex gap-5 mt-2 items-center">
                    <div className="flex gap-1 text-sm opacity-70 items-center">
                      <Calendar size={16} /> {sarticle.attributes.date}
                    </div>
                    <div className="flex gap-2 text-sm items-center">
                      {sarticle.attributes.tag1 && (
                        <div className="bg-accent px-2 py-1 rounded-md text-tblack font-medium flex gap-2 text-sm justify-content items-center">
                          {sarticle.attributes.tag1}
                        </div>
                      )}
                      {sarticle.attributes.tag2 && (
                        <div className="bg-red px-2 py-1 rounded-md font-medium text-tblack flex gap-2 text-sm justify-content items-center">
                          {sarticle.attributes.tag2}
                        </div>
                      )}
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
          </motion.div>
        ))
      )}
    </AnimatePresence>
  );
};

export default PinnedArticle;
