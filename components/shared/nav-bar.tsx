import Link from "next/link";

export function NavBar() {
  return (
    <header className="border-b border-border">
      <nav className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          tutr
        </Link>
        <Link
          href="/tutors/join"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          For Tutors
        </Link>
      </nav>
    </header>
  );
}
