export const AP_SUBJECTS = [
  "Biology",
  "Chemistry",
  "Physics 1",
  "Physics 2",
  "Physics C",
  "Calculus AB",
  "Calculus BC",
  "Statistics",
  "US History",
  "World History",
  "European History",
  "English Language",
  "English Literature",
  "Psychology",
  "Economics",
  "Computer Science A",
] as const;

export const IB_SUBJECTS = [
  "Biology",
  "Chemistry",
  "Physics",
  "Mathematics AA",
  "Mathematics AI",
  "History",
  "Geography",
  "English A",
  "English B",
  "Economics",
  "Psychology",
  "Computer Science",
] as const;

export const TYPEWRITER_WORDS = [
  "Biology",
  "Calculus",
  "Physics",
  "Economics",
  "History",
];

export type APSubject = (typeof AP_SUBJECTS)[number];
export type IBSubject = (typeof IB_SUBJECTS)[number];
