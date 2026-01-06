import { NavBar } from "@/components/shared/nav-bar";
import { DoorAnimation } from "@/components/landing/door-animation";
import { PathSelector } from "@/components/landing/path-selector";

export default function Home() {
  return (
    <DoorAnimation>
      <NavBar />
      <main>
        <PathSelector />
      </main>
    </DoorAnimation>
  );
}
