import { NavBar } from "@/components/shared/nav-bar";
import { DoorAnimation } from "@/components/landing/door-animation";
import { Hero } from "@/components/landing/hero";
import { SubjectGrid } from "@/components/landing/subject-grid";
import { HowItWorks } from "@/components/landing/how-it-works";
import { FeaturedTutors } from "@/components/landing/featured-tutors";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <DoorAnimation>
      <NavBar />
      <main>
        <Hero />
        <SubjectGrid />
        <HowItWorks />
        <FeaturedTutors />
      </main>
      <Footer />
    </DoorAnimation>
  );
}

