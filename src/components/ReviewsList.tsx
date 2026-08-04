import { reviews } from "@/data/reviews";
import ReviewCard from "./ReviewCard";
import { isLatestReview } from "@/utils/isLatestReview";

import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ReviewsList = () => {
  return (
    <StyledList>
      {reviews.map((review) => (
        <ReviewCard
          key={review.name}
          {...review}
          isLatest={isLatestReview(review, reviews)}
        />
      ))}
    </StyledList>
  );
};

export default ReviewsList;
