import { memo } from "react";
import styled from "styled-components";
import Section from "@/components/Section";
import SectionDivider from "@/components/SectionDivider";
import SectionTitle from "@/components/SectionTitle";
import Container from "@/components/Container";
import SectionDescription from "@/components/SectionDescription";

import ReviewCard from "@/components/ReviewCard";

import { reviews } from "@/data/reviews";

const StyledReviews = styled(Section)`
  .reviews {
    &__descr {
      margin-top: 48px;
    }
  }
`;

const Reviews = () => {
  return (
    <>
      <StyledReviews id="reviews">
        <Container>
          <SectionTitle>Reviews</SectionTitle>
          <SectionDescription className="reviews__descr">
            See what my past colleagues, managers and clients have to say about
            my frontend development skills.
          </SectionDescription>

          {reviews.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Container>
      </StyledReviews>
      <Container>
        <SectionDivider />
      </Container>
    </>
  );
};

export default memo(Reviews);
