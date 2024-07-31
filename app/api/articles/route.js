import { fetchBlogs } from "@/app/lib/api";

export async function GET() {
  try {
    const blogs = await fetchBlogs();
    return Response.json(blogs);
  } catch (error) {
    return Response.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
