"use client";

import { styled } from "styled-components";
import Container from "@/components/Container";
import Section from "@/components/Section";
import { H2, P1 } from "@/components/Text";
import Image from "next/image";

const Styled = styled.div`
  padding-top: 6rem;
  /* background-color: ${({ theme }) => theme.cardBg}; */
  position: relative;

  .inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .heading {
    padding: 8rem 0;
    text-align: center;
    max-width: 36rem;
    position: relative;
  }

  h2 {
    position: relative;
    margin-bottom: 1.5rem;
  }

  p {
    span {
      color: ${({ theme }) => theme.cyan};
    }
  }

  .bg {
    opacity: 0.25;
    object-fit: cover;
  }
`;

const BlogHero = () => {
  return (
    <Styled>
      <Container>
        <div className="inner">
          <Image
            className="bg"
            src="/assets/blog/FullSizeRender2.jpg"
            alt=""
            fill
          />
          <div className="heading">
            <H2>Blog</H2>
            <P1>
              Discover the latest <span>Vladyslav&apos;s posts</span> about{" "}
              <span>frontend development</span>, sharing his best practices,
              tips and tricks.
            </P1>
          </div>
        </div>
      </Container>
    </Styled>
  );
};

export default BlogHero;
