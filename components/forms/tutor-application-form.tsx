"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AP_SUBJECTS, IB_SUBJECTS } from "@/lib/constants";
import { submitTutorApplication } from "@/app/actions";
import { cn } from "@/lib/utils";

const ALL_SUBJECTS = [
  ...AP_SUBJECTS.map((s) => `AP ${s}`),
  ...IB_SUBJECTS.map((s) => `IB ${s}`),
];

export function TutorApplicationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const toggleSubject = (subject: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const result = await submitTutorApplication({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subjects: selectedSubjects,
      background: formData.get("background") as string,
    });

    if (result.success) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMessage(result.error || "Something went wrong");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-2">Application received</h2>
        <p className="text-muted-foreground">
          We&apos;ll review and get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Full name
        </label>
        <Input id="name" name="name" required placeholder="Dr. Jane Smith" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5">
          Subjects you can teach
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto border border-input rounded-lg p-2">
          {ALL_SUBJECTS.map((subject) => (
            <button
              key={subject}
              type="button"
              onClick={() => toggleSubject(subject)}
              className={cn(
                "px-2 py-1.5 text-xs rounded border text-left transition-colors",
                selectedSubjects.includes(subject)
                  ? "bg-[#2563EB] text-white border-[#2563EB]"
                  : "bg-background border-input hover:border-[#2563EB]"
              )}
            >
              {subject}
            </button>
          ))}
        </div>
        {selectedSubjects.length > 0 && (
          <p className="text-xs text-muted-foreground mt-1">
            {selectedSubjects.length} selected
          </p>
        )}
      </div>

      <div>
        <label htmlFor="background" className="block text-sm font-medium mb-1.5">
          Brief background
        </label>
        <Textarea
          id="background"
          name="background"
          required
          placeholder="Your education, teaching experience, and why you want to tutor"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{errorMessage}</p>
      )}

      <Button
        type="submit"
        variant="accent"
        className="w-full"
        disabled={status === "loading" || selectedSubjects.length === 0}
      >
        {status === "loading" ? "Submitting..." : "Apply to Tutor"}
      </Button>
    </form>
  );
}
