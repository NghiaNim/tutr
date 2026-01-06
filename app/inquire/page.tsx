import { BackButton } from "@/components/shared/back-button";
import { InquiryForm } from "@/components/forms/inquiry-form";

type SearchParams = Promise<{ type?: string; subject?: string }>;

export default async function InquirePage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { type = "ap", subject = "Biology" } = await searchParams;
  const examLabel = type.toUpperCase();
  const subjectLabel = decodeURIComponent(subject);

  return (
    <div className="min-h-screen">
      <header className="border-b border-border">
        <nav className="max-w-3xl mx-auto px-4 h-14 flex items-center">
          <BackButton />
        </nav>
      </header>

      <main className="max-w-md mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Request an {examLabel} {subjectLabel} tutor
        </h1>

        <InquiryForm examType={type} subject={subjectLabel} />
      </main>
    </div>
  );
}

