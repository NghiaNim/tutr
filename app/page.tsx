import { NavBar } from "@/components/shared/nav-bar";
import { PathSelector } from "@/components/landing/path-selector";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <PathSelector />
      </main>
    </>
  );
}
