export interface ReviewRes {
  name: string;
  address: string;
  date: string;
  title: string;
  content: string;
  before: string[];
  after: string[];
  bestReview: boolean;
}
