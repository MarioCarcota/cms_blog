import { fetchBlogArticleBySearch } from "@/app/lib/api";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const searchText = searchParams.get("searchText") || 1;

    const blogs = await fetchBlogArticleBySearch(searchText);
    return Response.json(blogs);
  } catch (error) {
    return Response.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
