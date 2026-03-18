import { Subject } from "../types";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description: "Fundamentals of programming and problem solving with Python.",
    createdAt: new Date("2026-03-01"),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Linear Algebra",
    department: "Math",
    description:
      "Systems of linear equations, matrices, determinants, and vector spaces.",
    createdAt: new Date("2026-03-05"),
  },
  {
    id: 3,
    code: "ENG102",
    name: "English Literature",
    department: "English",
    description:
      "Analysis of major works of English literature from the 18th century to the present.",
    createdAt: new Date("2026-03-10"),
  },
];
