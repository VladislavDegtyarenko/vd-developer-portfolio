import styled from "styled-components";
import Section from "./../ui/Section";
import SectionDivider from "./../ui/SectionDivider";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";
import SectionDescription from "./../ui/SectionDescription";

import ReviewCard from "../ui/ReviewCard";

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
            See what my past colleagues, managers and clients have to say about my
            frontend development skills.
          </SectionDescription>

          <ReviewCard />
        </Container>
      </StyledReviews>
      <Container>
        <SectionDivider />
      </Container>
    </>
  );
};

export default Reviews;
