export type SubjectType = "suggestion" | "alert" | "question";

export interface ContactInputType {
  email: string;
  category: string;
  description: string;
}
