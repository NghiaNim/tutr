export const SUBJECTS = [
  { id: "ap-biology", name: "AP Biology", icon: "🧬" },
  { id: "ap-calculus", name: "AP Calculus", icon: "📐" },
  { id: "ap-chemistry", name: "AP Chemistry", icon: "⚗️" },
  { id: "ap-physics", name: "AP Physics", icon: "🔭" },
  { id: "ap-history", name: "AP US History", icon: "📜" },
  { id: "ap-english", name: "AP English", icon: "📖" },
  { id: "ib-math", name: "IB Mathematics", icon: "🔢" },
  { id: "ib-physics", name: "IB Physics", icon: "⚛️" },
  { id: "ib-economics", name: "IB Economics", icon: "📊" },
  { id: "ib-english", name: "IB English", icon: "✍️" },
  { id: "sat-prep", name: "SAT Prep", icon: "📝" },
  { id: "act-prep", name: "ACT Prep", icon: "🎯" },
] as const;

export const TYPEWRITER_WORDS = [
  "AP Biology",
  "IB Math",
  "SAT Prep",
  "AP Calculus",
  "IB Physics",
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Choose Your Subject",
    description: "Browse expert tutors by AP, IB, or test prep specialty.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Book Instantly",
    description: "Schedule a session that fits your timeline.",
    icon: "Calendar",
  },
  {
    step: 3,
    title: "Ace Your Exam",
    description: "Learn 1-on-1 with proven strategies.",
    icon: "Trophy",
  },
] as const;

export const FEATURED_TUTORS = [
  {
    id: "1",
    name: "Sarah Chen",
    image: "/tutors/sarah.jpg",
    subjects: ["AP Biology", "AP Chemistry"],
    rating: 4.9,
    sessions: 342,
  },
  {
    id: "2",
    name: "Marcus Johnson",
    image: "/tutors/marcus.jpg",
    subjects: ["IB Math", "AP Calculus"],
    rating: 5.0,
    sessions: 518,
  },
  {
    id: "3",
    name: "Emily Park",
    image: "/tutors/emily.jpg",
    subjects: ["SAT Prep", "ACT Prep"],
    rating: 4.8,
    sessions: 421,
  },
  {
    id: "4",
    name: "David Williams",
    image: "/tutors/david.jpg",
    subjects: ["AP Physics", "IB Physics"],
    rating: 4.9,
    sessions: 267,
  },
] as const;

export const NAV_LINKS = [
  { href: "#subjects", label: "Find Tutors" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "/for-tutors", label: "For Tutors" },
] as const;

