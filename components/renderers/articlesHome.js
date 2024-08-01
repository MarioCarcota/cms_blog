"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import useSkeletonCount from "./skeletonRender";
import ArticleCard from "../layout/articleCard";
import ArticleCardSkeleton from "./skeletonArticleCard";
import { fetchBlogs } from "@/app/lib/api";

function ArticlesHome() {
  const [articles, setArticles] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const skeletonCount = useSkeletonCount();

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/articles?page=${pageNumber}`);
      const data = await res.json();

      if (data.data.length === 0) {
        setHasMore(false);
      } else {
        setArticles((prevArticles) => {
          const newArticles = data.data.filter(
            (newArticle) =>
              !prevArticles.some(
                (prevArticle) => prevArticle.id === newArticle.id
              )
          );
          return [...prevArticles, ...newArticles];
        });
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      !loading &&
      hasMore
    ) {
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  }, [loading, hasMore]);

  useEffect(() => {
    if (pageNumber > 1) {
      fetchArticles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const filteredArticles = articles.filter(
    (article) => !article.attributes.isPinned
  );

  return (
    <AnimatePresence>
      {filteredArticles.map((article, index) => (
        <motion.div
          key={`${article.id}-${index}`}
          className=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ArticleCard data={article} />
        </motion.div>
      ))}
      {loading &&
        Array.from({ length: skeletonCount }).map((_, index) => (
          <motion.div
            key={`skeleton-${index}`}
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ArticleCardSkeleton />
          </motion.div>
        ))}
    </AnimatePresence>
  );
}

export default ArticlesHome;
