import ArticleCard from "@/components/layout/articleCard";
import PinnedArticle from "@/components/layout/PinnedArticle";

export const metadata = {
  title: "Headless CMS Blog with NextJS",
  description: "This is a blog created with nextjs and Strapi headless content",
};

export default function Home() {
  const arr = ["gg", "bb", "weew", "dd", "ee", "rr", "ss", "ww", "we"];
  return (
    <main className="flex max-w-screen-2xl mx-auto flex-col items-center justify-between p-2 lg:p-4">
      <PinnedArticle />

      <div className="mt-10 w-full h-full">
        <h1 className="w-full font-bold text-2xl text-center md:text-left">
          My most recent articles
        </h1>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-10 w-full">
          {arr.map(() => {
            return <ArticleCard key={Math.random()} />;
          })}
        </div>
      </div>
    </main>
  );
}
