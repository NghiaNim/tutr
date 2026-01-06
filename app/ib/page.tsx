import Link from "next/link";
import { BackButton } from "@/components/shared/back-button";
import { IB_SUBJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function IBSubjectsPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border">
        <nav className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
          <BackButton />
          <Link
            href="/tutors/join"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            For Tutors
          </Link>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Select your subject
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {IB_SUBJECTS.map((subject) => (
            <Link
              key={subject}
              href={`/inquire?type=ib&subject=${encodeURIComponent(subject)}`}
              className={cn(
                "flex items-center justify-center h-16 px-4",
                "rounded-lg border border-border bg-card text-sm font-medium text-center",
                "hover:border-accent hover:shadow-sm transition-all"
              )}
            >
              {subject}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

