export type FaqItem = {
  q: string;
  a: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
};

export type BlogPost = {
  title: string;
  img: string;
  author: string;
  dateLabel: string;
};

export type SolutionTabId = "tap-hoa" | "sieu-thi" | "nguoi-tieu-dung" | "to-chuc-tu-thien";

export type SolutionTab = {
  id: SolutionTabId;
  label: string;
  eyebrow: string;
  headline: string;
  problemTitle: string;
  problem: string;
  problemBullets?: string[];
  solutionsTitle: string;
  solutions: string[];
  ctaLabel: string;
};
