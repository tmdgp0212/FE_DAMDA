export interface ReviewRes {
  data: ReviewData[];
}

export interface BestReviewRes {
  data: ReviewData;
}

export interface ReviewData {
  name: string;
  address: string;
  date: string;
  title: string;
  content: string;
  before: string[];
  after: string[];
  bestReview: boolean;
}
