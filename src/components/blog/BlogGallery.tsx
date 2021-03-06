import React from "react";

import { format } from "date-fns";
import Link from "next/link";
import Layout from "../Layout";
import { Pagination, IPaginationProps } from "./Pagination";
import { PostItems } from "../../utils/Content";

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <ul>
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-3 flex justify-between">
          <Link href="/blog/[slug]" as={`/blog/${elt.slug}`}>
            <a>
              <h2>{elt.title}</h2>
            </a>
          </Link>

          <div>{format(new Date(elt.date), "LLL d, yyyy")}</div>
        </li>
      ))}
    </ul>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
