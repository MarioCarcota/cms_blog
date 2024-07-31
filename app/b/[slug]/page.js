import { fetchBlogArticle } from "@/app/lib/api";
import Article from "@/components/renderers/article";
import { TransitionLink } from "@/components/utils/TransitionLink";
import { ArrowLeft } from "lucide-react";
import "/styles/articlePage.css";

export const metadata = {
  title: "Headless CMS Blog with NextJS",
  description: "This is a blog created with nextjs and Strapi headless content",
};

export default async function ArticlePage({ params }) {
  const { slug } = params;
  const article = await fetchBlogArticle(slug);
  if (article.data.length === 0) return null;
  const slugArticle = article.data[0];

  return (
    <main className="flex max-w-screen-2xl mx-auto flex-col items-center justify-between p-2 lg:p-4">
      <TransitionLink href={"/"}>
        <div className="border-b-[1px] transition-all w-full flex text-sm font-medium hover:gap-2 gap-1 items-center mt-4  hover:border-tblack">
          <ArrowLeft size={18} className="transition-all duration-300" />
          Go back home
        </div>
      </TransitionLink>
      <Article data={slugArticle.attributes} />
    </main>
  );
}
