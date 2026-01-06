import { BackButton } from "@/components/shared/back-button";
import { TutorApplicationForm } from "@/components/forms/tutor-application-form";

export default function TutorJoinPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border">
        <nav className="max-w-3xl mx-auto px-4 h-14 flex items-center">
          <BackButton />
        </nav>
      </header>

      <main className="max-w-md mx-auto px-4 py-12">
        <h1 className="text-2xl font-semibold text-center mb-8">
          Become a tutor
        </h1>

        <TutorApplicationForm />
      </main>
    </div>
  );
}

