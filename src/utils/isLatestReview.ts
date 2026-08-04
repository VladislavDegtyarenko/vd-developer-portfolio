import type { Review } from "@/types";

export const isLatestReview = (
  review: Review,
  allReviews: readonly Review[]
) => allReviews[0] === review;
