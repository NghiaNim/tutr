import Link from "next/link";
import { cn } from "@/lib/utils";

export function PathSelector() {
  return (
    <div className="min-h-[calc(100vh-57px)] flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-12">
        Find your tutor.
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <PathCard href="/ap" title="AP Exams" />
        <PathCard href="/ib" title="IB Exams" />
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Two paths. That&apos;s it.
      </p>
    </div>
  );
}

function PathCard({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "flex-1 flex items-center justify-center",
        "h-32 sm:h-40 rounded-lg border border-border bg-card",
        "text-lg font-medium",
        "hover:border-accent hover:shadow-sm transition-all"
      )}
    >
      {title}
    </Link>
  );
}

