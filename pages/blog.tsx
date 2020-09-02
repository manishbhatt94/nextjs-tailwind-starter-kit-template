import React from "react";

import { GetStaticProps } from "next";

import {
  BlogGallery,
  IBlogGalleryProps,
} from "../src/components/blog/BlogGallery";

import { Meta } from "../src/components/Meta";
import Layout from "../src/components/Layout";
import { IPaginationProps } from "../src/components/blog/Pagination";
import { Config } from "../src/utils/Config";
import { getAllPosts } from "../src/utils/Content";

const Blog = (props: IBlogGalleryProps) => (
  <Layout>
    <Meta
      title="Made with Next.js, TypeScript, ESLint, Prettier, PostCSS, Tailwind CSS"
      description={Config.description}
    />
    <BlogGallery posts={props.posts} pagination={props.pagination} />
  </Layout>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts(["title", "date", "slug"]);
  const pagination: IPaginationProps = {};

  if (posts.length > Config.pagination_size) {
    pagination.next = "/page2";
  }

  return {
    props: {
      posts: posts.slice(0, Config.pagination_size),
      pagination,
    },
  };
};

export default Blog;
