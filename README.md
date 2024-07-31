# Hyia, I'm Mario Carcota, this is a headless-ish blog application using Nextjs & Strapi!

This was created for a tech interview, the main goal was to create a blog with nextjs and importing live the articles from Strapi an headless content editor and db.

Check the [live demo](https://cms-blog-sepia.vercel.app/)!

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [External Packages Used](#packages)
- [License](#license)

## Installation

To get started follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/MarioCarcota/cms_blog.git
   cd cms_blog
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env.local` file in the root of the project and add the following variables:

   ```env
   STRAPI_API_TOKEN=your_strapi_api_key
   ```

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Configuration

## Packages

- Framer-Motion: animation package that helps animate everything seamlessly inline;
- Lucide-react: full icon library
- Remark: to convert the markdown syntax in usable html code

## License

This application is licensed under the MIT License. See the license file for more information.
