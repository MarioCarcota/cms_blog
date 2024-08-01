export const fetchBlogs = async (page = 1) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  const request = await fetch(
    `https://deserving-idea-0f81c30e1c.strapiapp.com/api/blogs?populate=*&pagination[page]=${page}`,
    reqOptions
  );
  const response = await request.json();

  return response;
};

export const fetchBlogPinned = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  const request = await fetch(
    "https://deserving-idea-0f81c30e1c.strapiapp.com/api/blogs?populate=*&filters[isPinned][$eq]=true",
    reqOptions
  );
  const response = await request.json();

  return response;
};

export const fetchBlogArticle = async (slug) => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  const request = await fetch(
    `https://deserving-idea-0f81c30e1c.strapiapp.com/api/blogs?populate=*&filters[slug][$eq]=${slug}`,
    reqOptions
  );
  const response = await request.json();

  return response;
};
