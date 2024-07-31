export const fetchBlogs = async () => {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
  };

  const request = await fetch(
    "http://127.0.0.1:1337/api/blogs?populate=*",
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
    "http://127.0.0.1:1337/api/blogs?populate=*&filters[isPinned][$eq]=true",
    reqOptions
  );
  const response = await request.json();

  return response;
};
