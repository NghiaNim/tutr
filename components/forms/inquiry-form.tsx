"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type InquiryFormProps = {
  examType: string;
  subject: string;
};

export function InquiryForm({ examType, subject }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      goals: formData.get("goals"),
      examType,
      subject,
    };
    console.log("Inquiry submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-2">Thank you</h2>
        <p className="text-muted-foreground">
          We&apos;ll match you with a tutor soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
          Your name
        </label>
        <Input id="name" name="name" required placeholder="Jane Smith" />
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
        <label htmlFor="goals" className="block text-sm font-medium mb-1.5">
          Tell us about your goals
        </label>
        <Textarea
          id="goals"
          name="goals"
          required
          placeholder="What do you want to achieve? Any specific topics or exam dates?"
        />
      </div>

      <Button type="submit" variant="accent" className="w-full">
        Submit Request
      </Button>
    </form>
  );
}

