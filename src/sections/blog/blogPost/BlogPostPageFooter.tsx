"use client";

import styled from "styled-components";
import Link from "next/link";
import ArrowIcon from "public/assets/Icons/Arrow";
import { P2 } from "@/components/Text";
// import SharePost from "../../../components/Blog/BlogPost/SharePost";
import dynamic from "next/dynamic";
const SharePost = dynamic(
  () => import("../../../components/Blog/BlogPost/SharePost"),
  { ssr: false }
);

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .back-to-blog-btn {
    margin-top: 2rem;
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.white};
    text-decoration: none;
    border-radius: 0.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    font-size: 1rem;

    svg {
      width: 0.75rem;
      height: 0.75rem;
      margin-right: 0.5rem;
      position: relative;
      transform: translateX(0px);
      transition: transform 0.15s;
    }

    &:hover {
      svg {
        transform: translateX(-4px);
      }
    }
  }
`;

const BlogPostPageFooter = () => {
  return (
    <Styled>
      <SharePost />

      <Link href="/blog" className="back-to-blog-btn">
        <ArrowIcon />
        Back to blog
      </Link>
    </Styled>
  );
};

export default BlogPostPageFooter;
