"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AP_SUBJECTS, IB_SUBJECTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ALL_SUBJECTS = [...AP_SUBJECTS.map((s) => `AP ${s}`), ...IB_SUBJECTS.map((s) => `IB ${s}`)];

export function TutorApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const toggleSubject = (subject: string) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subjects: selectedSubjects,
      background: formData.get("background"),
    };
    console.log("Tutor application submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
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
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-background border-input hover:border-accent"
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

      <Button
        type="submit"
        variant="accent"
        className="w-full"
        disabled={selectedSubjects.length === 0}
      >
        Apply to Tutor
      </Button>
    </form>
  );
}

