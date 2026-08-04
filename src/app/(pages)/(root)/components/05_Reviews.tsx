"use client";

import { memo } from "react";
import styled from "styled-components";
import Section from "@/components/Section";
import SectionDivider from "@/components/SectionDivider";
import SectionTitle from "@/components/SectionTitle";
import Container from "@/components/layout/Container";
import SectionDescription from "@/components/SectionDescription";

import REVIEWS from "@/data/reviews.json";
import ReviewsList from "@/components/ReviewsList";

const StyledReviews = styled(Section)`
  .inner {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const Reviews = () => {
  const { title, description } = REVIEWS;

  return (
    <>
      <StyledReviews id="reviews">
        <Container>
          <div className="inner">
            <SectionTitle>{title}</SectionTitle>
            <SectionDescription>{description}</SectionDescription>

            <ReviewsList />
          </div>
        </Container>
      </StyledReviews>
      <Container>
        <SectionDivider />
      </Container>
    </>
  );
};

export default memo(Reviews);
